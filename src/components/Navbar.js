import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="d-inline-block align-top"
            />
          </Link>
          <span className="ml-2 mx-2 text-base">Finder Lost</span>
        </div>
        <div className="navbar-nav mx-auto">
          <Link href="#home">
            <span className="nav-link">Home</span>
          </Link>
          <Link href="#key-features">
            <span className="nav-link">Features</span>
          </Link>
          <Link href="#apps">
            <span className="nav-link">Apps</span>
          </Link>
          <Link href="#contact">
            <span className="nav-link">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
