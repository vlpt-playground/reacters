import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.scss';

const textMap = {
  login: '로그인',
  register: '회원가입'
};

const AuthForm = ({ type }) => {
  return (
    <div className="AuthForm">
      <h3>{textMap[type]}</h3>
      <form>
        <input placeholder="아이디" />
        <input placeholder="비밀번호" />
        {type === 'register' && <input placeholder="비밀번호 확인" />}
        <button type="submit">{textMap[type]}</button>
      </form>
      <div className="footer">
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
