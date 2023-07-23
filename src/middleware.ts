import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const nonAuthEndpoints = [
  "/auth/login",
  "/auth/register",
  "/auth/recovery",
  "/auth/callback",
  "/"
]

const excludedRoutes = [
  /\/_next\/.*/,
  /.*\.(svg|jpg|jpeg|png|gif|js)/,
  ""
]

const matches = (str: string | RegExp) => {
  return (strMatches: string) => {
    if (typeof str === "string") {
      return str == strMatches
    }

    return str.test(strMatches)
  }
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  if (req.nextUrl.pathname != "/") {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}