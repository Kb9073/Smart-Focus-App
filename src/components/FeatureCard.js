import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
