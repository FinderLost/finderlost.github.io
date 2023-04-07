const DownloadSection = () => {
  return (
    <section id="apps" className="container my-5">
      <h2 className="mb-4 text-center">Comming soon!</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <h4>FinderPet</h4>
          <p>
            The ultimate solution for reuniting lost pets with their loving
            owners. Join our community of animal lovers and help bring families
            together again
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>FinderPeople</h4>
          <p>
            Get connected with lost loved ones and join a global network of
            seekers and finders. Our innovative technology and dedicated team
            make it easier than ever to restore hope and bring people back
            together.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>FinderThings</h4>
          <p>
            Keep track of your most cherished belongings and never lose them
            again. Our seamless platform connects seekers and finders across the
            world, helping to bring possessions back to their rightful owners.
          </p>
        </div>
        <div className="m-5">
          <div className="alert alert-warning" role="alert">
            Our app is in development. Stay tuned for updates.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
