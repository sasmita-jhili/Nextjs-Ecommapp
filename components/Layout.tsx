import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <HomePage/>
      <Footer />
    </div>
  );
}
