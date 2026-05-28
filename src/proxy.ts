import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['he', 'en', 'es'];
const defaultLocale = 'he';

// שינינו את שם הפונקציה כאן ל-proxy
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // בדיקה אם ה-URL כבר מכיל שפה
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // אם אין שפה ב-URL, ננתב לשפת ברירת המחדל
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // הפעלת ה-Proxy על כל העמודים, למעט קבצי מערכת, API ותמונות
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};