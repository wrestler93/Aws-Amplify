import React from 'react'
import ALogo from '../../src/assets/ALogo.png'
import ReactLog from '../../src/assets/ReactLog.png'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateStepData } from '../store/Duck/stepSlice';

const AppDetails = ({ onComplete }) => {
    const dispatch = useDispatch();
    const stepsData = useSelector((state) => state.steps.stepsData);

    const handleUpdateData = (data) => {
        dispatch(updateStepData({ step: 0, data }));
    };

    const formik = useFormik({
        initialValues: {
            name: stepsData[0]?.name || '',
            description: stepsData[0]?.description || '',
            step: 1
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            onComplete();
            handleUpdateData(values);
        },
    });

    return (
        <div className="Details_container">
            <h1 className="Details_header">Start building with Amplify</h1>
            <p>
                Amplify provides a fully-managed web hosting experience and a backend building service to build fullstack apps.
                If you need a starter project, please visit the <a href="./" className="header-link">docs.</a> </p>

            <div className='DeployLogo'>
                <h1 className="Details_header">Deploy your app</h1>
                <img src={ReactLog} alt="AWS Amplify Logo" className="logoLine" />
                <img src={ALogo} alt="AWS Amplify Logo" className="logoLine" />
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitLab" className="logoLine" />
            </div>
            <h5>To deploy an app from a git Provider, Select one of the option below:
            </h5>
            <div className="git-providers">
                <button className="provider-button">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="20" />
                    GitHub
                </button>
                <button className="provider-button">
                    <img src="https://via.placeholder.com/21" alt="BitBucket" width="20" />
                    BitBucket
                </button>
                <button className="provider-button">
                    <img src="https://via.placeholder.com/20" alt="CodeCommit" />
                    CodeCommit
                </button>
                <button className="provider-button">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitLab" width="20" />
                    GitLab
                </button>
            </div>
            <div>Amplify requires read only access to your repository.</div>
            <h5 className="Details_header">Deploy app manually, select "Deploy without Git"</h5>
            <div className="git-providers1">
                <button className="provider-button">
                    <img src={ReactLog} alt="GitLab" width="20" />
                    Deploy Without GitLab
                </button>
            </div>
            <div className="footer1">
                <form onSubmit={formik.handleSubmit} className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                        {formik.touched.description && formik.errors.description ? (
                            <div className="error">{formik.errors.description}</div>
                        ) : null}
                    </div>

                    <div className="buttons">
                        <button
                            type="button"
                            className="button previous"
                            onClick={() => formik.resetForm()}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="button next">
                            Next
                        </button>
                    </div>
                </form>
                <div className="footer-link2">
                    <a href="./">Create an app with Gen 1</a>
                </div>
            </div>
        </div>
    );
}

export default AppDetails
