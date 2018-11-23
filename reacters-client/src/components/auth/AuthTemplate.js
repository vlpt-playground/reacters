import React from 'react';
import { Link } from 'react-router-dom';
import './AuthTemplate.scss';

const AuthTemplate = ({ children }) => {
  return (
    <div className="AuthTemplate">
      <div className="whitebox">
        <div className="logo-area">
          <Link to="/" className="logo">
            REACTERS
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
