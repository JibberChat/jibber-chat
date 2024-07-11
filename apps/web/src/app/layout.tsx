import { ChatProvider } from "@/contexts/ChatContext";
import { RoomsProvider } from "@/contexts/RoomsContext";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { ApolloWrapper } from "@/http/client/apollo-wrapper";

import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ApolloWrapper>
        <RoomsProvider>
          <ChatProvider>
            <html lang="en">
              <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
                <Toaster />
              </body>
            </html>
          </ChatProvider>
        </RoomsProvider>
      </ApolloWrapper>
    </ClerkProvider>
  );
}
