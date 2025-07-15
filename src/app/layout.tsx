import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ViewTransitions } from "next-view-transitions";
export const metadata: Metadata = {
  title: "Practica ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`antialiased`}>
          <NavBar />

          <main className="h-full">{children}</main>
        </body>
      </html>
    </ViewTransitions>
  );
}
