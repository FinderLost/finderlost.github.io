import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { getAnalytics, logEvent } from "firebase/analytics";
import { isSupported } from "@firebase/analytics";

const Navbar = () => {
  const handleLinkClick = (event, eventName) => {
    if (typeof window !== "undefined" && isSupported()) {
      event.preventDefault();
      const analytics = getAnalytics();
      logEvent(analytics, eventName, { link: event.target.href });
      window.location.href = event.target.href;  
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Link href="/" onClick={(e) => handleLinkClick(e, "logo_click")}>
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
          <a
            href="#"
            className="nav-link"
            onClick={(e) => handleLinkClick(e, "home_click")}
          >
            Home
          </a>
          <a
            href="#key-features"
            className="nav-link"
            onClick={(e) => handleLinkClick(e, "features_click")}
          >
            Features
          </a>
          <a
            href="#apps"
            className="nav-link"
            onClick={(e) => handleLinkClick(e, "apps_click")}
          >
            Apps
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => handleLinkClick(e, "contact_click")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
