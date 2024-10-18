// Services.js
import React from "react";
import "./Services.css"; // Ensure you create this CSS file for styling

const servicesData = [
  {
    title: "Online Consultation",
    description:
      "Consult with well trained model from the comfort of your home through video calls or chat.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.awW-78zQWmL3j0sD7Bi4agHaH9?w=651&h=700&rs=1&pid=ImgDetMain/300", // Replace with actual image URLs
  },
  {
    title: "Health Assessments",
    description:
      "Comprehensive health assessments to identify risk factors and improve your overall health.",
    imageUrl: "https://fst.net.au/wp-content/uploads/Digital-Health.jpg",
  },
  {
    title: "Medication suggestion",
    description:
      "Our medication has great effects on patients it was trustworthy",
    imageUrl:
      "https://th.bing.com/th/id/OIP.cd2doI9_dbcZPNlJlcLipAHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7/300",
  },
  {
    title: "Wellness Programs",
    description:
      "Personalized wellness programs designed to help you achieve your health goals.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.j8pZ2dCfMStvDqDCsRRv2QHaDV?rs=1&pid=ImgDetMain",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="service-image"
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
