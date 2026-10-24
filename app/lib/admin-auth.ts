export const ADMIN_LOGIN_KEY = "adminLoggedIn";
export const ADMIN_EMAIL_KEY = "adminEmail";

export function isAdminLoggedIn(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const adminLoggedIn = localStorage.getItem(ADMIN_LOGIN_KEY) === "true";
  return adminLoggedIn && Boolean(localStorage.getItem(ADMIN_EMAIL_KEY));
}

export function setAdminLoggedIn(email: string): void {
  localStorage.setItem(ADMIN_LOGIN_KEY, "true");
  localStorage.setItem(ADMIN_EMAIL_KEY, email);
}

export function clearAdminLoggedIn(): void {
  localStorage.removeItem(ADMIN_LOGIN_KEY);
  localStorage.removeItem(ADMIN_EMAIL_KEY);
}