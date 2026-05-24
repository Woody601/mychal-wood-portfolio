import { Inter, Lato, Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/page";
import Banner from "./components/Banner/page";
const inter = Inter({ subsets: ["latin"], display: "swap" });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Mychal Wood",
  description: "My portfolio website, showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className, robotoSlab.className].join(" ")}>
        <NavBar />
        <Banner>
          I&rsquo;m currently revamping my portfolio website to bring you more
          of my work and features to enhance your experience — thank you for
          your patience!
        </Banner>
        <div className="pagescroll">
          <div className="app">{children}</div>
        </div>
      </body>
    </html>
  );
}
