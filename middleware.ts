import { NextResponse, NextRequest } from 'next/server';
import { APP_ROUTE } from './constants/route';

const AUTH_URLS = [APP_ROUTE.SIGN_UP, APP_ROUTE.SIGN_IN, APP_ROUTE.FORGOT];
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('session');
  if (AUTH_URLS.includes(pathname) && token) {
    return NextResponse.redirect(new URL(APP_ROUTE.DASHBOARD, request.nextUrl));
  }
  if (!AUTH_URLS.includes(pathname) && !token) {
    return NextResponse.redirect(new URL(APP_ROUTE.SIGN_IN, request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
