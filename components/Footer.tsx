import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black shadow dark:bg-gray-800">
      <div className="w-full flex mx-auto max-w-screen-xl p-4 justify-center">
        <span className="text-sm text-white">
          © 2023 E-commerce App
        </span>
        <ul className="text-sm text-white sm:mt-0 ml-4">
          <Link href="#">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-twitter"></i>
          </Link>

          <Link href="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="#">
          <i className="fa-brands fa-square-instagram"></i>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
