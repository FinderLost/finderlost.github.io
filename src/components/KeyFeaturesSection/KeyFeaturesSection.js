const KeyFeaturesSection = () => {
  return (
    <section id="key-features" className="container mt-5">
      <h2 className="mb-4" style={{ color: 'var(--content-prominent)' }}>Key Features</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 style={{ color: 'var(--content-prominent)' }}>Simplified Posting</h4>
          <p style={{ color: 'var(--text-base)' }}>
            Share details about missing persons, lost pets, or misplaced items
            with our user-friendly interface, ensuring your plea reaches the
            widest possible audience.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h4 style={{ color: 'var(--content-prominent)' }}>Customized Search</h4>
          <p style={{ color: 'var(--text-base)' }}>
            Filter through posts by category, location, and more, allowing you
            to focus on what's relevant to your search.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h4 style={{ color: 'var(--content-prominent)' }}>Comprehensive Details</h4>
          <p style={{ color: 'var(--text-base)' }}>
            View essential information about missing persons, lost pets, or
            personal objects, complete with photos and contact details for the
            person who posted the item.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h4 style={{ color: 'var(--content-prominent)' }}>Effortless Connection</h4>
          <p style={{ color: 'var(--text-base)' }}>
            Communicate with the person who posted a missing individual, lost
            pet, or personal object to provide leads, updates, or coordinate the
            return of itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
