import React from 'react'
import ALogo from '../../src/assets/ALogo.png'
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={ALogo} alt="AWS Amplify Logo" className="logo" />
        <span>AWS Amplify</span>
        <span className="breadcrumb" />
        <a href="./" className="breadcrumb-link">All apps</a>
        <span className="breadcrumb"> / </span>
        <a href="./" className="breadcrumb-link">Create new app</a>
      </div>
      <div className="header-right">
        <a href="./" className="header-link">Support</a>
        <a href="./" className="header-link">Docs</a>
      </div>
    </header>
  )
}

export default Header
