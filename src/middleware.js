import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const protectedRoutes = ["/profile"]; // Add more routes here if needed
  const token = request.cookies.get("token")?.value || "";

  if (!token && protectedRoutes.includes(path)) {
    // User is trying to access protected routes without a token
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/verifyemail"],
};
