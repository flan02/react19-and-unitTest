// TODO: This layout is only for react19 usecontext codinginflow. Probably, I'd need to change main layout for others react19 courses/features. This layout will be a copy in case I had to change it.

import { AuthProvider } from "@/contexts/auth-provider";
import { getCurrentUser } from "@/lib/auth";
import type { Metadata } from "next";
import { Geist } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React 19 Context Example",
  description:
    "Learn how and when to use Context in React 19 with this tutorial by Coding in Flow.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <AuthProvider user={user}>{children}</AuthProvider>
      </body>
    </html>
  );
}