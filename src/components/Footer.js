import { getAnalytics, logEvent } from "firebase/analytics";
import { isSupported } from "@firebase/analytics";

const Footer = () => {
  const handleLinkClick = (event, eventName) => {
    if (typeof window !== "undefined" && isSupported()) {
      event.preventDefault();
      const analytics = getAnalytics();
      logEvent(analytics, eventName, { link: event.target.href });
      window.location.href = event.target.href;  
    }
  };
  return (
    <footer className="footer footer-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>About Us</h4>
            <p>
              We are a company dedicated to reuniting people, pets, and personal
              objects.
            </p>
          </div>
          <div id="contact" className="col-md-4 mb-4 mb-md-0">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <a 
                href="mailto:info@finderlost.com"
                onClick={(e) => handleLinkClick(e, "mailto_click")}
                >info@finderlost.com</a>
              </li>
            </ul>
          </div>
          <div id="contact" className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled d-flex">
              <li>
              <i className="text-base">Coming soon!</i>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                  onClick={(e) => handleLinkClick(e, "facebook_click")}
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                  onClick={(e) => handleLinkClick(e, "twitter_click")}
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                  onClick={(e) => handleLinkClick(e, "instagram_click")}
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                  onClick={(e) => handleLinkClick(e, "linkedin_click")}
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <p className="text-base mb-0">
          © 2023 FinderLost, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
