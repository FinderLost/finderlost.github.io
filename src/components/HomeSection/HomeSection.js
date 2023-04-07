import styles from "./HomeSection.module.css";

const HomeSection = () => {
  return (
    <section id="home" className={`container mt-5 ${styles.section}`}>
      <div className="row">
        <h2 className={styles.heading}>Welcome to Our Website</h2>
        <p className={styles.paragraph}>
          Where we harness the power of community and cutting-edge technology to
          bring people, pets, and possessions back together. Our innovative
          mobile application, available on iOS and soon on Android and web
          platforms, revolutionizes the search for lost individuals, beloved
          pets, and cherished personal items by seamlessly connecting seekers
          and finders across the globe.
        </p>
        <p className={styles.paragraph}>
          With Finder Lost, you're never alone in your search. Our platform
          empowers users to become a part of a global network, dedicated to
          reuniting people with the things that matter most. Through our three
          distinct yet unified apps, Finder Lost streamlines the process of
          finding and reconnecting, making it easier than ever to restore hope
          and return what has gone missing.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
