import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-vertical-timeline-component/style.min.css";
import { ThemeProvider } from "@/components/theme-provider";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio - Tom",
  description: "Portfolio built by nil1143",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen>
          <AppSidebar />
          <main className="w-full">
            <Navbar />
          <div className="">
          {children}
          </div>
          </main>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
