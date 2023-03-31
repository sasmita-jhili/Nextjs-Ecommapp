import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <div>home</div>
      <Footer />
    </div>
  );
}
