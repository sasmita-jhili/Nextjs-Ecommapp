import Link from "next/link";

const Navbar = () => {
    const links = [
      { name: "Home" },
      { name: "Products" },
      { name: "Contact us" },
      { name: "About" },
      { name: "Service" },
    ];
  
    return (
      <header>
        <nav className="p-3 bg-white shadow-md w-full fixed">
          <div className="flex items-center justify-around">
            <div className="font-bold text-2xl font-[poppins] cursor-pointer ">
              Ecommerce
            </div>
            <ul>
              <li className="md:flex hidden items-center gap-8 font-[poppins]">
                {links.map((link) => {
                  return <div>{link.name}</div>;
                })}
              </li>
            </ul>
            <div>
              <Link href='/'>
                <i className="fa-regular fa-user mr-2"></i>
              </Link>
              <Link href='/'>
                <i className="fa-solid fa-cart-shopping ml-2"></i>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  export default Navbar;