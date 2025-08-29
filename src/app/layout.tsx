import { AuthProvider } from "@/contexts/auth-provider";
import { getCurrentUser } from "@/lib/auth";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React 19 Context Example",
  description:
    "Learn how and when to use Context in React 19 with this tutorial by Coding in Flow.",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {

  // TODO: This is optional an we can load the page with de user loaded and it's not necessary a loading state
  const user = await getCurrentUser(); // ? Data obtained from our server (root must be an async fc)

  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        {/* <AuthProvider user={user}>{children}</AuthProvider> */}
        <AuthProvider user={user}>{children}</AuthProvider>
      </body>
    </html>
  );
}
