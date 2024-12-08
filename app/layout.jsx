import localFont from "next/font/local";
import { Poppins, Dosis, Comfortaa } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from '@/components/auth-provider'
import PageWrapper from "@/components/PageWrapper";
import { Toaster } from "@/components/ui/toaster";

// Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google Font
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const dosis = Dosis({
  variable: "--font-dosis",
  weight: ["400", "500", "700"],
  subsets: ["latin"]
})

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  weight: ["400", "500", "700"],
  subsets: ["latin"]
})


export const metadata = {
  title: "HealthHub",
  description:
    "Elevate your gatherings with our unique blend of entertainment and artistry",
};

export default async function RootLayout({ children, session }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${comfortaa.variable} ${dosis.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-comfortaa selection:bg-transparent `}>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <PageWrapper> */}
            <AuthProvider>
              <div className="flex flex-col min-h-screen bg-gradient-to-r from-background to-primary/70">
                <Navbar />
                <main className="flex-grow">
                  {children}
                  <Toaster />
                </main>
                <Footer />
              </div>
            </AuthProvider>
          {/* </PageWrapper> */}
        </ThemeProvider>

      </body>
    </html>
  );
}