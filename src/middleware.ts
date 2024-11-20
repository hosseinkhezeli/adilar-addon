import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect('https://adilar.com/');
  }

  const token = req.nextUrl.searchParams.get('token');

  if (token) {
    const response = NextResponse.next();
    response.cookies.set('auth_token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24,
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|video|assets|favicon.ico|sw.js|sitemap.xml|robots.txt).*)',
  ],
};
