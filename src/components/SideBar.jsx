import React from 'react';

const SideBar = ({ currentStep, completedSteps }) => {
  const steps = [
    "Choose source code provider",
    "Add repository and branch",
    "App settings",
    "Review",
  ];

  return (
    <div className="sidebar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`progress-step ${currentStep === index ? 'active' : ''} ${completedSteps[index] ? 'completed' : ''}`}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-label">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
