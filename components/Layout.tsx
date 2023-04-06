import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <main className="container m-auto mt-10 mb-5 pt-10 px-8">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
