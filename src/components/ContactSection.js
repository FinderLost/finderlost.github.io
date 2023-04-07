const ContactSection = () => {
  return (
    <section id="contact" className="container mt-5">
      <h2 className="mb-4">Contact</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Contact Information</h4>
          <p>
            Providing clear contact information and a way for users to get in
            touch with your team can help build trust and improve customer
            support.
          </p>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Address: 123 Main
              Street, Anytown USA
            </li>
            <li>
              <i className="fas fa-phone"></i> Phone: (123) 456-7890
            </li>
            <li>
              <i className="fas fa-envelope"></i> Email: finderlost@gmail.com
            </li>
          </ul>
        </div>
        <div className="col-md-6 mb-4">
          <h4>Follow Us</h4>
          <div className="row">
            <div className="col-md-12 mb-4">
              <ul className={`list-inline text-left`}>
                <li className="list-inline-item">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <i className="fab fa-facebook-f mr-2"></i>
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <i className="fab fa-twitter mr-2"></i>
                    <span>Twitter</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <i className="fab fa-instagram mr-2"></i>
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <i className="fab fa-linkedin-in mr-2"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
