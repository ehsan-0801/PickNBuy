import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Redirect authenticated users trying to access login
    if (path === "/account" && token) {
      const baseUrl = new URL(req.url).origin;
      switch (token.role) {
        case "admin":
          return NextResponse.redirect(`${baseUrl}/admin`);
        case "vendor":
          return NextResponse.redirect(`${baseUrl}/vendor`);
        case "customer":
          return NextResponse.redirect(`${baseUrl}/customer`);
        default:
          return NextResponse.redirect(`${baseUrl}`);
      }
    }
    const baseUrl = new URL(req.url).origin;

    // Protect admin routes
    if (path.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(`${baseUrl}/account`);
    }

    // Protect vendor routes
    if (path.startsWith("/vendor") && token?.role !== "vendor") {
      return NextResponse.redirect(`${baseUrl}/account`);
    }

    // Protect customer routes
    if (path.startsWith("/customer") && token?.role !== "customer") {
      return NextResponse.redirect(`${baseUrl}/account`);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/vendor/:path*", "/customer/:path*", "/login"],
};
