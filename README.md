# Aws-Amplify

###Project Summary: Multi-Step Form Application with AWS Amplify

#Overview
This project is a multi-step form application built using React, Redux Toolkit, and Formik. It is designed to guide users through a series of steps to configure and deploy an application. The steps include selecting a source code provider, adding repository and branch information, setting up build configurations, and reviewing the information before final submission.

#Key Features

#Multi-Step Navigation:
Users can navigate through different steps of the form, with progress indicated on a sidebar.

#Formik Integration:
Formik is used for form state management and validation.

#Redux Toolkit:
Redux Toolkit is utilized to manage the state of the form across different steps.

#Netlify Hosting: 
The application is deployed on netlify for easy hosting and scalability.

#Components

AppDetails: Collects application name and description.
RepositoryConfig: Allows users to add repository URL and branch name.
BuildSettings: Users can input frontend build command and build directory.
Review: Summarizes all the entered information for final review before submission.
State Management
Redux Slice: Manages the state of the form data and the current step.

#Repository Structure
src/components: Contains all the React components for different steps.
src/redux: Redux slice for managing state.
src/App.js: Main application component.
src/App.css: Styles for the application.

#Conclusion
This project demonstrates how to build a user-friendly multi-step form application using React, Redux Toolkit, and Formik. It integrates seamlessly with AWS Amplify for deployment, providing a scalable and manageable hosting solution. The application guides users through a structured process, ensuring all necessary information is collected before deployment.


Clone the Repository:

### `git clone <repository-url>`

Install Dependencies:

### `npm install`

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
