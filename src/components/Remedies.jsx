import React from "react";
import "./Remedies.css";
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

function Remedies() {
  return (
    <section className="remedies">
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
  );
}

export default Remedies;
