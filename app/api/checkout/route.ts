import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey)
  : null;

type BillingPeriod = "monthly" | "yearly";
type PlanName = "Basic" | "Pro" | "Enterprise" | "Scale";

const planAmounts: Record<PlanName, { monthly: number; yearly: number }> = {
  Basic: { monthly: 3900, yearly: 39000 },
  Pro: { monthly: 8900, yearly: 89000 },
  Enterprise: { monthly: 24900, yearly: 249000 },
  Scale: { monthly: 49900, yearly: 499000 },
};

function isValidPlan(plan: string): plan is PlanName {
  return ["Basic", "Pro", "Enterprise", "Scale"].includes(plan);
}

function isValidBillingPeriod(billing: string): billing is BillingPeriod {
  return billing === "monthly" || billing === "yearly";
}

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: "Stripe is not configured." }, { status: 500 });
    }

    const body = (await request.json()) as { plan?: string; billing?: string };
    const plan = body.plan;
    const billing = body.billing;

    if (!plan || !billing || !isValidPlan(plan) || !isValidBillingPeriod(billing)) {
      return NextResponse.json({ error: "Invalid plan selection." }, { status: 400 });
    }

    const unitAmount = planAmounts[plan][billing];
    const interval: Stripe.PriceCreateParams.Recurring.Interval = billing === "monthly" ? "month" : "year";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${plan} Plan`,
              description: `Lincoln Tagore ${plan} (${billing}) subscription`,
            },
            recurring: {
              interval,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      success_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/pricing`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Unable to create checkout url." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create checkout session.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}