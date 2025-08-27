// TODO: This layout is only for react19 usecontext codinginflow. Probably, I'd need to change main layout for others react19 courses/features. This layout will be a copy in case I had to change it.

import { AuthProvider } from "@/contexts/auth-provider";
import { ExampleProvider } from "@/contexts/example-provider";
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
    "Learn how and when to use Context in React 19.",
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
        {/* In react19 can combine multiple Context Providers */}
        <ExampleProvider value="This is the father Context provider">
          <ExampleProvider value="This is a nested Context Provider">{children}</ExampleProvider>
        </ExampleProvider>
        {/* <AuthProvider user={user}>{children}</AuthProvider> */}
      </body>
    </html>
  );
}