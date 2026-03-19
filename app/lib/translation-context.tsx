"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "@/translations/en.json";
import ur from "@/translations/ur.json";
import ar from "@/translations/ar.json";
import es from "@/translations/es.json";
import fr from "@/translations/fr.json";
import de from "@/translations/de.json";
import it from "@/translations/it.json";
import pt from "@/translations/pt.json";
import nl from "@/translations/nl.json";
import tr from "@/translations/tr.json";
import hi from "@/translations/hi.json";
import cn from "@/translations/cn.json";
import jp from "@/translations/jp.json";
import kr from "@/translations/kr.json";
import ru from "@/translations/ru.json";
import id from "@/translations/id.json";
import th from "@/translations/th.json";
import vn from "@/translations/vn.json";
import pl from "@/translations/pl.json";
import gr from "@/translations/gr.json";

export type LanguageCode =
  | "en"
  | "ur"
  | "ar"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "nl"
  | "tr"
  | "hi"
  | "cn"
  | "jp"
  | "kr"
  | "ru"
  | "id"
  | "th"
  | "vn"
  | "pl"
  | "gr";

type TranslationFile = {
  navbar: {
    home: string;
    about: string;
    services: string;
    pricing: string;
    contact: string;
    login: string;
    signup: string;
    dashboard: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  login: {
    email: string;
    password: string;
    login: string;
    forgotPassword: string;
  };
  signup: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    signup: string;
  };
};

type TranslationContextType = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (path: string, fallback?: string) => string;
};

const DEFAULT_LANGUAGE: LanguageCode = "en";
const STORAGE_KEY = "siteLanguage";

const translations: Record<LanguageCode, TranslationFile> = {
  en,
  ur,
  ar,
  es,
  fr,
  de,
  it,
  pt,
  nl,
  tr,
  hi,
  cn,
  jp,
  kr,
  ru,
  id,
  th,
  vn,
  pl,
  gr,
};

const languageCodes = Object.keys(translations) as LanguageCode[];

export const supportedLanguages: Array<{ code: LanguageCode; label: string; country: string }> = [
  { code: "en", label: "English", country: "us" },
  { code: "ur", label: "Urdu", country: "pk" },
  { code: "ar", label: "Arabic", country: "sa" },
  { code: "es", label: "Spanish", country: "es" },
  { code: "fr", label: "French", country: "fr" },
  { code: "de", label: "German", country: "de" },
  { code: "it", label: "Italian", country: "it" },
  { code: "pt", label: "Portuguese", country: "pt" },
  { code: "nl", label: "Dutch", country: "nl" },
  { code: "tr", label: "Turkish", country: "tr" },
  { code: "hi", label: "Hindi", country: "in" },
  { code: "cn", label: "Chinese", country: "cn" },
  { code: "jp", label: "Japanese", country: "jp" },
  { code: "kr", label: "Korean", country: "kr" },
  { code: "ru", label: "Russian", country: "ru" },
  { code: "id", label: "Indonesian", country: "id" },
  { code: "th", label: "Thai", country: "th" },
  { code: "vn", label: "Vietnamese", country: "vn" },
  { code: "pl", label: "Polish", country: "pl" },
  { code: "gr", label: "Greek", country: "gr" },
];

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && languageCodes.includes(stored as LanguageCode)) {
      setLanguageState(stored as LanguageCode);
    }
  }, []);

  const setLanguage = useCallback((nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
    localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  const t = useCallback(
    (path: string, fallback = "") => {
      const active = translations[language] ?? translations[DEFAULT_LANGUAGE];
      const value = path.split(".").reduce<unknown>((acc, key) => {
        if (typeof acc === "object" && acc !== null && key in acc) {
          return (acc as Record<string, unknown>)[key];
        }
        return undefined;
      }, active);

      if (typeof value === "string") {
        return value;
      }

      const enValue = path.split(".").reduce<unknown>((acc, key) => {
        if (typeof acc === "object" && acc !== null && key in acc) {
          return (acc as Record<string, unknown>)[key];
        }
        return undefined;
      }, translations[DEFAULT_LANGUAGE]);

      return typeof enValue === "string" ? enValue : fallback;
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t]
  );

  return <TranslationContext.Provider value={contextValue}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
