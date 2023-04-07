import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../public/images/logo.svg";

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}
    >
      <div className="container">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="d-inline-block align-top"
          />
        </Link>
        <div className="navbar-nav">
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
