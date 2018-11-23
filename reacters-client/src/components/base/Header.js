import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Responsive from './Responsive';

const Header = () => {
  return (
    <Responsive>
      <div className="Header">
        <Link to="/" className="logo">
          REACTERS
        </Link>
        <div className="right-area">
          <Link to="/login">로그인</Link>
        </div>
      </div>
    </Responsive>
  );
};

export default Header;
