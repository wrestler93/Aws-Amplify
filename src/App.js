import { useEffect, useState } from 'react';
import './App.css';
import AppDetails from './components/AppDetails';
import Header from './components/Header';
import SideBar from './components/SideBar';
import RepositoryConfig from './components/RepositoryConfig';
import BuildSettings from './components/BuildSettings';
import Review from './components/Review';
import { useSelector } from 'react-redux';


function App() {
  const stepsData = useSelector((state) => state.steps.stepsData);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([false, false, false, false]);

  const handleStepCompletion = (step) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[step] = true;
    setCompletedSteps(newCompletedSteps);
    setCurrentStep(step + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    if (currentStep === 0 && !stepsData?.length) setCompletedSteps([false, false, false, false])
  }, [currentStep, stepsData])

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <AppDetails onComplete={() => handleStepCompletion(0)} onPrevious={handlePreviousStep} />;
      case 1:
        return <RepositoryConfig onComplete={() => handleStepCompletion(1)} onPrevious={handlePreviousStep} />;
      case 2:
        return <BuildSettings onComplete={() => handleStepCompletion(2)} onPrevious={handlePreviousStep} />;
      case 3:
        return <Review onComplete={() => setCurrentStep(0)} onPrevious={handlePreviousStep} />;
      default:
        return <AppDetails onComplete={() => handleStepCompletion(0)} onPrevious={handlePreviousStep} />;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <SideBar currentStep={currentStep} completedSteps={completedSteps} />
        <div className="content">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
}

export default App;