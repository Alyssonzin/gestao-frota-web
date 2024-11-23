import { NextResponse } from 'next/server';
//Seta as rotas que serão verificadas pelo middleware
export const config = {
    matcher: ['/driver/:path*', '/vehicle/:path*'],
}

export function middleware(request) {
    const sessionCookie = request.cookies.get('email');

    if (!sessionCookie) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
}