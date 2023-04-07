import React from "react";

const KeyFeaturesSection = () => {
  return (
    <section id="key-features" className="container mt-5">
      <h2 className="mb-4 text-prominent text-center">Key Features</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 className="text-prominent text-center">Simplified Posting</h4>
          <p className="text-base">
            Share details about missing persons, lost pets, or misplaced items
            with our user-friendly interface, ensuring your plea reaches the
            widest possible audience.
          </p>
        </div>
        <div className="col-md-6 mb-4 text-center">
          <h4 className="text-prominent">Customized Search</h4>
          <p className="text-base">
            Filter through posts by category, location, and more, allowing you
            to focus on what's relevant to your search.
          </p>
        </div>
        <div className="col-md-6 mb-4 text-center">
          <h4 className="text-prominent">Comprehensive Details</h4>
          <p className="text-base">
            View essential information about missing persons, lost pets, or
            personal objects, complete with photos and contact details for the
            person who posted the item.
          </p>
        </div>
        <div className="col-md-6 mb-4 text-center">
          <h4 className="text-prominent">Effortless Connection</h4>
          <p className="text-base">
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
