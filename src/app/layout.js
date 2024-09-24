import localFont from "next/font/local";
import "./globals.css";
import Infonav from "./components/Infonav";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";


// Load the Integral CF font
const integralCF = localFont({
  src: "./fonts/integralCF.otf", // Ensure correct path to your font file
  display: "swap",               // Ensures text is visible during font loading
  weight: "400",                 // Font weight (adjust if needed)
  variable: "--font-integral-cf", // CSS variable to reference the font
});

// Load the Satoshi font
const satoshi = localFont({
  src: "./fonts/Satoshi-Medium.ttf", // Ensure correct path to your font file
  display: "swap",                   // Ensures text is visible during font loading
  weight: "400",                     // Font weight (adjust if needed)
  variable: "--font-satoshi-medium",  // CSS variable for the Satoshi font
});

export const metadata = {
  title: "CoinMerce",
  description: "The next generation of E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${integralCF.variable} ${satoshi.variable} font-sans antialiased`} // Include both font variables
      >
        <header className='w-full'>
        <Infonav/>
        <MainNav/>
      </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
