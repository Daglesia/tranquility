import { auth } from "@/auth"
import { NextResponse } from 'next/server'

const AUTH_REQUIRED_ROUTES = ['/home'];

export default auth(async (req) => {
    const nextPath = req.nextUrl.pathname;

    if (nextPath === '/') {
        if (req.auth?.user?.id) {
            return NextResponse.redirect(new URL('/home', req.url));
        }
    }

    if (AUTH_REQUIRED_ROUTES.includes(nextPath)) {
        if (!req.auth?.user?.id) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }
})