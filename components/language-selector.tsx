"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { supportedLanguages, useTranslation } from "@/app/lib/translation-context";

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useTranslation();
  const rootRef = useRef<HTMLDivElement>(null);

  const current = useMemo(
    () => supportedLanguages.find((item) => item.code === language) ?? supportedLanguages[0],
    [language]
  );

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", onPointerDown);

    return () => {
      window.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  const currentFlag = useMemo(
    () => `https://flagcdn.com/w20/${current.country}.png`,
    [current.country]
  );

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-white px-3 py-2 text-sm font-medium transition hover:border-[color:var(--brand)]/40 hover:bg-[color:var(--surface-elevated)]"
      >
        <Image
          src={currentFlag}
          alt={current.label}
          width={20}
          height={16}
          className="h-4 w-5 rounded-sm"
        />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown
          className={`size-4 text-[color:var(--muted)] transition duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        className={`absolute right-0 z-50 mt-2 max-h-80 w-56 overflow-auto rounded-xl border border-[color:var(--line)] bg-white p-2 shadow-xl transition duration-300 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {supportedLanguages.map((language) => {
          const active = language.code === current.code;

          return (
            <button
              key={language.code}
              type="button"
              onClick={() => {
                setLanguage(language.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left text-sm transition ${
                active
                  ? "bg-[color:var(--brand-soft)] text-[color:var(--brand-strong)]"
                  : "hover:bg-[color:var(--surface-soft)]"
              }`}
            >
              <Image
                src={`https://flagcdn.com/w20/${language.country}.png`}
                alt={language.label}
                width={20}
                height={16}
                className="h-4 w-5 rounded-sm"
              />
              <span>{language.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}