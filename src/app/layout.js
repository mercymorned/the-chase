import localFont from "next/font/local";
import "./globals.css";
import BarContext, { BarWrapper } from './components/bar-id-context.js'

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

export const metadata = {
  title: "Board Game Practice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BarWrapper>
        {children}
        </BarWrapper>
      </body>
    </html>
  );
}
