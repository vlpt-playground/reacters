import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.scss';

const textMap = {
  login: '로그인',
  register: '회원가입'
};

const AuthForm = ({ type, form, error, onChange, onSubmit }) => {
  const { username, password, passwordConfirm } = form || {}; // form 이 없을 때 크래시 방지
  return (
    <div className="AuthForm">
      <h3>{textMap[type]}</h3>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={username}
        />
        <input
          name="password"
          placeholder="비밀번호"
          onChange={onChange}
          value={password}
          type="password"
        />
        {type === 'register' && (
          <input
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={passwordConfirm}
            type="password"
          />
        )}
        {error && <div className="error">{error}</div>}
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
