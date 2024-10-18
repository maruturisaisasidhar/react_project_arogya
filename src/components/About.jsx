import React from "react";
import "./About.css"; // Ensure you create this CSS file

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Aarogya</h1>
      <p>
        Aarogya is a revolutionary digital health platform designed to empower
        users by providing a reliable and intuitive way to assess their health
        symptoms. By simply entering your symptoms into our system, you can
        receive immediate feedback and predictions about potential health
        issues. Our aim is to bridge the gap between digital technology and
        healthcare, making health management accessible and informative for
        everyone.
      </p>

      <div className="image-gallery">
        <img
          src="https://th.bing.com/th/id/OIP.ROCz-OwUy0MYmwzRJwkgxwHaFW?rs=1&pid=ImgDetMain"
          alt="Symptom Analysis"
        />
        <img
          src="https://prosperbeyond.com/wp-content/uploads/2020/04/PB-Blogging-Image-Predictions-for-the-Future-1000x500.jpg"
          alt="Health Predictions"
        />
        <img
          src="https://cihr-irsc.gc.ca/images/hp_si_ph.jpg"
          alt="Personalized Health"
        />
      </div>

      <h2>What We Offer</h2>
      <p>
        Our platform provides a range of features to enhance your healthcare
        journey:
      </p>
      <ul>
        <li>
          <strong>Symptom Checker:</strong> Input your symptoms and receive a
          preliminary assessment that can help guide your next steps.
        </li>
        <li>
          <strong>Health Predictions:</strong> Based on your symptoms and
          personal health data, get insights into potential health conditions.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> Navigate our platform with
          ease, making it simple for anyone to use.
        </li>
        <li>
          <strong>Confidential & Secure:</strong> Your data is protected with
          the highest security standards, ensuring privacy and confidentiality.
        </li>
        <li>
          <strong>Expert Advice:</strong> Access a wealth of resources and
          articles curated by healthcare professionals to help you understand
          your symptoms better.
        </li>
        <li>
          <strong>Community Support:</strong> Connect with others on similar
          health journeys and share experiences for mutual support.
        </li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        At Aarogya, we believe that knowledge is power. Our vision is to create
        a world where individuals are informed and empowered to take charge of
        their health. By leveraging the latest technology and medical research,
        we strive to provide the most accurate and reliable health information
        available.
      </p>

      <h2>Why Choose Aarogya?</h2>
      <p>
        With numerous health apps available, Aarogya stands out due to our
        commitment to accuracy, user experience, and security. We are not just
        another health app; we are your partner in health and wellness. Join us
        in our mission to make healthcare accessible, accurate, and
        user-friendly for all.
      </p>
    </section>
  );
};

export default About;
