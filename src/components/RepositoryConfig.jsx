import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateStepData } from '../store/Duck/stepSlice';

const RepositoryConfig = ({ onComplete, onPrevious }) => {
  const dispatch = useDispatch();
  const stepsData = useSelector((state) => state.steps.stepsData);

  const handleUpdateData = (data) => {
    dispatch(updateStepData({ step: 1, data }));
  };

  const formik = useFormik({
    initialValues: {
      repositoryUrl: stepsData[1]?.repositoryUrl || '',
      branchName: stepsData[1]?.branchName || '',
      step: 2
    },
    validationSchema: Yup.object({
      repositoryUrl: Yup.string().url('Invalid URL').required('Required'),
      branchName: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      onComplete();
      handleUpdateData(values);
    },
  });

  return (
    <div className="Details_container">
      <h1 className="Details_header">Repository Configuration</h1>
      <p>
        Configure your repository settings below. If you need more information, visit the <a href="./" className="header-link">docs.</a>
      </p>
      <div className="footer1">
        <form onSubmit={formik.handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="repositoryUrl">Repository URL</label>
            <input
              id="repositoryUrl"
              name="repositoryUrl"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.repositoryUrl}
            />
            {formik.touched.repositoryUrl && formik.errors.repositoryUrl ? (
              <div className="error">{formik.errors.repositoryUrl}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="branchName">Branch Name</label>
            <input
              id="branchName"
              name="branchName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.branchName}
            />
            {formik.touched.branchName && formik.errors.branchName ? (
              <div className="error">{formik.errors.branchName}</div>
            ) : null}
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
        <div className="footer-link2">  
          <a href="./">Go back to previous step</a>
        </div>
      </div>
    </div>
  );
}

export default RepositoryConfig
