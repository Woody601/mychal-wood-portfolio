import { Inter } from "next/font/google";
import "./css/globals.css";
import NavBar from "./components/NavBar/page";
import Banner from "./components/Banner/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mychal Wood",
  description: "My portfolio website, showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
