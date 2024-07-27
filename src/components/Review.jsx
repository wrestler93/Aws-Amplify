import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetSteps } from '../store/Duck/stepSlice';

const Review = ({ onComplete, onPrevious }) => {
  const dispatch = useDispatch();
  const stepsData = useSelector((state) => state.steps.stepsData);


  const handleSubmit = () => {
    alert('Form submitted!');
    dispatch(resetSteps());
    onComplete()
  };
  return (
    <div className="Details_container">
      <h1 className="Details_header">Review Your Data</h1>
      <p>Please review the information you've provided. If everything looks good, click "Submit" to complete the process.</p>
      {stepsData?.length > 0 && stepsData?.map((item, index) => {
        return (
          <div className="review-container" key={index}>
            {item.step === 1 ? <div className="review-section">
              <h2>Step 1: App Details</h2>
              <p><strong>Name:</strong> {item.name || 'N/A'}</p>
              <p><strong>Description:</strong> {item.description || 'N/A'}</p>
            </div> : ''}
            {item.step === 2 ? <div className="review-section">
              <h2>Step 2: Repository Configuration</h2>
              <p><strong>Repository URL:</strong> {item.repositoryUrl || 'N/A'}</p>
              <p><strong>Branch Name:</strong> {item.branchName || 'N/A'}</p>
            </div> : ''}
            {item.step === 3 ? <div className="review-section">
              <h2>Step 3: Build Settings</h2>
              <p><strong>Frontend Build Command:</strong> {item.frontendBuildCommand || 'N/A'}</p>
              <p><strong>Build Directory:</strong> {item.buildDirectory || 'N/A'}</p>
            </div> : ''}
          </div>
        )
      })}
      {stepsData?.length > 0 && <div className="buttons">
        <button
          type="button"
          className="button previous"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button type="button" className="button next" onClick={handleSubmit}>
          Submit
        </button>
      </div>}
    </div>
  );
}

export default Review
