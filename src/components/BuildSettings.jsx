
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateStepData } from '../store/Duck/stepSlice';
import ReactLog from '../../src/assets/ReactLog.png'

const BuildSettings = ({ onPrevious, onComplete }) => {
  const dispatch = useDispatch();
  const stepsData = useSelector((state) => state.steps.stepsData);

  const handleUpdateData = (data) => {
    dispatch(updateStepData({ step: 2, data }));
  };

  const formik = useFormik({
    initialValues: {
      frontendBuildCommand: stepsData[2]?.frontendBuildCommand || '',
      buildDirectory: stepsData[2]?.buildDirectory || '',
      step: 3
    },
    validationSchema: Yup.object({
      frontendBuildCommand: Yup.string().required('Required'),
      buildDirectory: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      onComplete()
      handleUpdateData(values);
    },
  });

  return (
    <div className="Details_container">
      <h1>App settings</h1>
      <div className="form-group">
        <label htmlFor="appName">App name</label>
        <input type="text" id="appName" name="appName" placeholder='Put the name' value={stepsData[0]?.name} readOnly />
      </div>
      <div className="form-group1">
        <h2>Build settings</h2>
        <p>Your build settings have been detected automatically, please verify your "Frontend build command" and "Build output directory".</p>
      </div>
      <div className="form-group1">
        <label>Auto-detected frameworks</label>
        <div className="git-providers1">
          <button className="provider-button">
            <img src={ReactLog} alt="GitLab" width="20" />
            React
          </button>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} >
        <div className="form-group2">
          <div className="form-group4">
            <label htmlFor="buildCommand">Frontend build command</label>
            <input
              id="frontendBuildCommand"
              name="frontendBuildCommand"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.frontendBuildCommand}
            />
            {formik.touched.frontendBuildCommand && formik.errors.frontendBuildCommand ? (
              <div className="error">{formik.errors.frontendBuildCommand}</div>
            ) : null}
          </div>
          <div className="form-group4">
            <label htmlFor="outputDirectory">Build output directory</label>
            <input
              id="buildDirectory"
              name="buildDirectory"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.buildDirectory}
            />
            {formik.touched.buildDirectory && formik.errors.buildDirectory ? (
              <div className="error">{formik.errors.buildDirectory}</div>
            ) : null}
          </div>
        </div>

        <div className="form-group5">
          <input type="checkbox" id="passwordProtect" name="passwordProtect" />
          <label htmlFor="passwordProtect">Password protect my site</label>
        </div>

        <div className="buttons">
          <button
            type="button"
            className="button previous"
            onClick={() => onPrevious()}
          >
            Previous
          </button>
          <button type="submit" className="button next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuildSettings;
