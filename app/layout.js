
import "./globals.css";
import Footer from "./component/section/Footer";
import ClientLayout from "@/utils/Wrapper";



export const metadata = {
  title: "LTIDF",
  description: "Larger Than I Development Foundation",
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        <ClientLayout>

        <main>
          {children}
        </main>
        </ClientLayout>
        <footer>
          <Footer />
        </footer>

      </body>
    </html>
  );
}
