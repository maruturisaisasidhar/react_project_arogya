import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="Home">
      {/* Header */}
      <div className="header">
        <nav className="nav">
          <Dropdown title="Conditions" items={conditions} />
          <Dropdown title="Drugs & Supplements" items={drugsSupplements} />
          <Dropdown title="Well-Being" items={wellBeing} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <main className="main-content">
          <h1>Welcome to Aarogya Selfcare and Diagnosis</h1>

          {/* Services Section */}
          <section className="home-section">
            <div className="service-card">
              <h2>Our Services</h2>
              <ul>
                <li>Comprehensive Health Assessments</li>
                <li>Online Consultations with Experts</li>
                <li>Personalized Health Plans</li>
                <li>Wellness Programs</li>
                <li>Medication Management</li>
                <li>Symptom Checker Tool</li>
              </ul>
            </div>

            {/* Instructions Section */}
            <div className="instruction-card">
              <h2>Instructions</h2>
              <ul>
                <li>Visit our homepage for services overview.</li>
                <li>Sign up for an account to access personalized features.</li>
                <li>Use the symptom checker for initial assessments.</li>
                <li>Schedule online consultations with our experts.</li>
                <li>Follow health plans provided by our specialists.</li>
                <li>Contact support for any queries or assistance.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </footer>
    </div>
  );
};

// Dropdown Component with click functionality
const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-items-container">
            {items.map((item, index) => (
              <div key={index} className="dropdown-item">
                <a href={"#${item}"}>{item}</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Data for Dropdowns
const conditions = [
  "ADD/ADHD",
  "Allergies",
  "Arthritis",
  "Atrial fibrillation",
  "Breast Cancer",
  "Cancer",
  "Crohn's Disease",
  "Depression",
  "Diabetes",
  "DVT",
  "Eczema",
  "Eye Health",
  "Heart Disease",
  "HIV & AIDS",
  "Lung Disease",
  "Lupus",
  "Mental Health",
  "Multiple Sclerosis",
  "Migraine",
  "Pain Management",
  "Psoriasis",
  "Psoriatic Arthritis",
  "Rheumatoid Arthritis",
  "Sexual Conditions",
  "Skin Problems",
  "Sleep Disorders",
  "Ulcerative Colitis",
];

const drugsSupplements = [
  "Drugs",
  "Supplements",
  "Pill Identifier",
  "Interaction Checker",
];

const wellBeing = [
  "Aging Well",
  "Baby",
  "Birth Control",
  "Children's Health",
  "Diet & Weight Management",
  "Fitness & Exercise",
  "Food & Recipes",
  "Health & Balance",
  "Healthy Beauty",
  "Men's Health",
  "Parenting",
  "Pet Health",
  "Pregnancy",
  "Sex & Relationships",
  "Teen Health",
  "Women's Health",
];

export default Home;
