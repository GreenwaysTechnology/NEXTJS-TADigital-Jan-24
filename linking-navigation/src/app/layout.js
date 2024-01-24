import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
