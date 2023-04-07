import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
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
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#key-features" className="nav-link">
            Features
          </a>
          <a href="#apps" className="nav-link">
            Apps
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
