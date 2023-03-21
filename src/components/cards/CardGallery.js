import React from "react";
import {comparisons} from "../../data/learningData";

const CardGallery = () => {
  return (
<div>
        {comparisons.map((comparison) => (
        <div className="grid p-4 bg-white rounded-lg shadow" key={comparison.title}>
          <h2 className="grid mb-2 text-lg font-medium">{comparison.title}</h2>
          <p className="grid mb-2 text-gray-500">{comparison.date}</p>
          <p className="grid mb-4 text-gray-500">Frameworks: {comparison.frameworks.join(", ")}</p>
          <p className="grid mb-4 text-gray-500">Use Case: {comparison.useCase}</p>
          <ul>
            {comparison.metrics.map((metric) => (
              <li key={metric.name}>
                <span className="grid font-medium">{metric.name}: </span>
                <span className="grid font-medium text-green-600">{metric.winner}</span>
                <span> beats </span>
                <span className="grid font-medium text-red-600">{metric.loser}</span>
                <span> by </span>
                <span className="grid font-medium">{metric.percentDifference}%</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
</div>

  );
};

export default CardGallery;
