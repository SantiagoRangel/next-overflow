import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-soaceGrotesk",
});

export const metadata: Metadata = {
  title: "Devflow",
  description:
    "Devflow is a platform for developers to ask questions and share knowledge.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <h1 className="h1-bold">HOLA ME LLAMO EL GORDO</h1>
        <body className={`${inter.className} ${spaceGrotesk.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
