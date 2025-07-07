// import Header from "@/components/Header";
import Header from "@/components/Header";
import "./globals.css";





export const metadata = {
  title: "demo website for real Estate",
  description: "discription of what you offer, a kind of killer copy that sell & converts",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" class="dark">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
