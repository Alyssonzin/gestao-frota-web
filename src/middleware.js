import { NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/login'];
export function middleware(request) {
    const { pathname } = request.nextUrl;

    //Se a rota acessada não for publica, redireciona para a página de login
    if(!PUBLIC_ROUTES.includes(pathname)) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
}

//Seta as rotas que serão verificadas pelo middleware
export const config = {
    matcher: ['/driver/:path*', '/vehicle/:path*'],
}