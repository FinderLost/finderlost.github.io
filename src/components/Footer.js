import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis sapien at commodo commodo.</p>
            </div>
            <div className="col-md-4">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li><Link href="/">Home</Link></li>
                <li><Link href="#key-features">Features</Link></li>
                <li><Link href="#download">Download</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <p>123 Main Street<br />Anytown, USA 12345<br />Phone: (123) 456-7890<br />Email: info@finderlost.com</p>
            </div>
          </div>
          <hr />
          <p className="text-center">Copyright &copy; 2023
            <a href="#">FinderLost</a> | All Rights Reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  