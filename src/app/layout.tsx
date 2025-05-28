import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HydrationZustand from "./components/HydrationZustand";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./lib/theme";
import ConfigureAmplifyClientSide from "./lib/awsAmplifyCognito";
import Provider from "./hooks/providerQuery";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Centrum vôľa žiť",
  description:
    "Sme občianske združenie, ktoré sa s láskou a odbornosťou stará o deti so znevýhodnením. Naším cieľom je poskytovať komplexnú starostlivosť a podporu – fyzickú, psychologickú aj sociálnu – v bezpečnom a priateľskom prostredí.",

  keywords: [
    "Centrum vôľa žiť",
    "centrum vôľa žiť",
    "centrum vola zit",
    "deti s nevýhodnením",
    "fyzioterapia",
    "masáže",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Centrum vôľa žiť",
    description:
      "Sme občianske združenie, ktoré sa s láskou a odbornosťou stará o deti so znevýhodnením. Naším cieľom je poskytovať komplexnú starostlivosť a podporu – fyzickú, psychologickú aj sociálnu – v bezpečnom a priateľskom prostredí.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/intro_doplnkove.jpg",
        alt: "Centrum vôľa žiť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <AppRouterCacheProvider>
        <body className={`${inter.className} antialiased`}>
          <ConfigureAmplifyClientSide />
          <ThemeProvider theme={theme}>
            <HydrationZustand>
              <Provider>
                <Navbar /> {children}
                <Footer />
              </Provider>
            </HydrationZustand>
          </ThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
