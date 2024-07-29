import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Menu from "../components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "CARDIOROFFE",
  description: "Luzbelito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
