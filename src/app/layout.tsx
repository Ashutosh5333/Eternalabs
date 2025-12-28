import Providers from "./providers";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Axiom Token Discovery",
  description:
    "Real-time crypto token analytics with WebSocket live price streaming.",
  metadataBase: new URL("https://eternalabs-nine.vercel.app"),
  openGraph: {
    title: "Axiom Token Discovery",
    description:
      "Live crypto analytics dashboard with lightning fast performance.",
    url: "https://eternalabs-nine.vercel.app",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* image domains performance */}
        <link rel="preconnect" href="https://assets.coingecko.com" />
        <link rel="dns-prefetch" href="https://assets.coingecko.com" />
        <link rel="preconnect" href="https://loremflickr.com" />
        <link rel="dns-prefetch" href="https://loremflickr.com" />

        {/* Mobile performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
