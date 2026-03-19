export const ADMIN_LOGIN_KEY = "adminLoggedIn";
export const ADMIN_EMAIL_KEY = "adminEmail";

export function validateAdminCredentials(email: string, password: string): boolean {
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return false;
  }

  return email === adminEmail && password === adminPassword;
}

export function isAdminLoggedIn(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const adminLoggedIn = localStorage.getItem(ADMIN_LOGIN_KEY) === "true";
  const storedAdminEmail = localStorage.getItem(ADMIN_EMAIL_KEY);
  const envAdminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  if (!adminLoggedIn || !storedAdminEmail || !envAdminEmail) {
    return false;
  }

  return storedAdminEmail === envAdminEmail;
}

export function setAdminLoggedIn(email: string): void {
  localStorage.setItem(ADMIN_LOGIN_KEY, "true");
  localStorage.setItem(ADMIN_EMAIL_KEY, email);
}

export function clearAdminLoggedIn(): void {
  localStorage.removeItem(ADMIN_LOGIN_KEY);
  localStorage.removeItem(ADMIN_EMAIL_KEY);
}