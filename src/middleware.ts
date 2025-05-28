import { type NextRequest, NextResponse } from "next/server";
import { authenticatedUser } from "./app/auth/amplify-server-utils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const user = await authenticatedUser({ request, response });

  const isOnAdminArea = request.nextUrl.pathname.startsWith("/admin");

  if (isOnAdminArea) {
    if (user && !user.isAdmin) {
      return NextResponse.redirect(
        new URL("/auth/login-admin", request.nextUrl)
      );
    }
    if (!user) {
      return NextResponse.redirect(
        new URL("/auth/login-admin", request.nextUrl)
      );
    }
  }

  if (user && user.isAdmin && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*", "/admin"],
};
