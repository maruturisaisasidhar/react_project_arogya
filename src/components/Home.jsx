import React from "react";
import "./Home.css";
import "./Footer.css";
import cold from "../assets/cold1.jpg";
import cough from "../assets/cough.jpg";
import diarrhea from "../assets/Diarrhea.jpg";
import fatigue from "../assets/fatigue.jpeg.jpg";
import fever from "../assets/fever1.jpg";
import headache from "../assets/Headache.jpg";
import indigestion from "../assets/indigestion.jpg";
import nausea from "../assets/nausea.jpg";
import sore from "../assets/sore.png";
import allergy from "../assets/allergy.png";
import aarogyalogo from "../assets/arogya.jpg";
const diseases = [
  {
    name: "Cold",
    image: cold,
    remedy: "Drink warm fluids, rest, and take vitamin C.",
    medicine: "Paracetamol or Ibuprofen",
  },
  {
    name: "Headache",
    image: headache,
    remedy: "Massage temples, drink plenty of water.",
    medicine: "Ibuprofen or Aspirin",
  },
  {
    name: "Cough",
    image: cough,
    remedy: "Honey and ginger tea, stay hydrated.",
    medicine: "Cough syrup",
  },
  {
    name: "Fever",
    image: fever,
    remedy: "Stay hydrated, rest, and take a lukewarm bath.",
    medicine: "Paracetamol or Ibuprofen",
  },
  {
    name: "Sore Throat",
    image: sore,
    remedy: "Gargle with warm salt water, stay hydrated.",
    medicine: "Throat lozenges",
  },
  {
    name: "Nausea",
    image: nausea,
    remedy: "Ginger tea or crackers can help settle the stomach.",
    medicine: "Antacids or prescribed medication",
  },
  {
    name: "Diarrhea",
    image: diarrhea,
    remedy: "Stay hydrated and eat bland foods.",
    medicine: "Loperamide or probiotics",
  },
  {
    name: "Allergies",
    image: allergy,
    remedy: "Avoid allergens, use saline nasal spray.",
    medicine: "Antihistamines",
  },
  {
    name: "Fatigue",
    image: fatigue,
    remedy: "Get enough sleep and maintain a balanced diet.",
    medicine: "Multivitamins",
  },
  {
    name: "Indigestion",
    image: indigestion,
    remedy: "Eat smaller meals and avoid fatty foods.",
    medicine: "Antacids or digestive aids",
  },
];

function Home() {
  return (
    <div>
      <section className="remedies">
        <div class="tit">
          <img src={aarogyalogo} alt="Welcome to Aarogya" class="tit-img"></img>
          <div class="tit-h1">
            <h1>
              Welcome To Aarogya
              <br />
            </h1>
            <h4>
              Explore self-care tips and diagnosis based on your symptoms.
            </h4>
          </div>
        </div>
        <h1>Common Diseases and Natural Remedies</h1>
        <div className="disease-list">
          {diseases.map((disease, index) => (
            <div
              className="disease-item"
              key={index}
              style={{ backgroundImage: `url(${disease.image})` }}
            >
              <div className="disease-overlay">
                <h3>{disease.name}</h3>
                <p>Remedy: {disease.remedy}</p>
                <p>Medicine: {disease.medicine}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div className="footer-links">
          {" "}
          {/* Changed class to className */}
          <div className="footer-column">
            <h4>Get to Know Us</h4>
            <ul>
              <li>
                <a href="./about">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press Releases</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect with Us</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Let Us Help You</h4>
            <ul>
              <li>
                <a href="./profile">Your Account</a>
              </li>
              <li>
                <a href="./services">Customer Service</a>
              </li>
              <li>
                <a href="#">Returns & Refunds</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Make Money with Us</h4>
            <ul>
              <li>
                <a href="#">Sell on Arogya</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          {" "}
          {/* Changed class to className */}
          <p>&copy; 2024 Arogya: Self Care & Diagnosis. All Rights Reserved.</p>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
