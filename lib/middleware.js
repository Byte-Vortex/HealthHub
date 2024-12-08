import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin" // Redirect to login if not authenticated
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"] // Protect these routes
};
