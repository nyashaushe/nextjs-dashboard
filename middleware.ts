// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
 
// export default NextAuth(authConfig).auth;
 
// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };

// // This middleware is used to protect the dashboard route and its sub-routes
// // and redirect unauthenticated users to the login page.



import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
 
export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
 
  const isOnDashboard = req.nextUrl.pathname.startsWith('/dashboard');
 
  if (isOnDashboard && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
 
  if (!isOnDashboard && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
 
  return NextResponse.next();
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
 