const Footer = () => {
  return (
    <footer className="footer-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>About Us</h4>
            <p>
              We are a company dedicated to reuniting people, pets, and personal
              objects.
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@finderlost.com">info@finderlost.com</a>
              </li>
            </ul>
          </div>
          <div id="contact" className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled d-flex">
              <span className="mx-2 text-base">Coming soon!</span>
              <li className="mx-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
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
