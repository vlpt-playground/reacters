import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { connect } from 'react-redux';
import { changeField, setError, register } from '../../modules/auth';
import { setToken } from '../../lib/api/client';
import { check } from '../../modules/user';

class RegisterForm extends Component {
  handleChange = e => {
    const { value, name } = e.target;
    this.props.changeField({
      mode: 'register',
      key: name,
      value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { form, register, setError, check } = this.props;
    const { username, password, passwordConfirm } = form;
    setError(null);
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
    }
    try {
      await register({
        username,
        password
      });
      const { authorization } = this.props;
      localStorage.setItem('authorization', JSON.stringify(authorization));
      setToken(`Bearer ${authorization.access_token}`);
      await check();
      const { user, history } = this.props;
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/');
    } catch (e) {
      if (!e.response) {
        setError('오류 발생!');
      }
      if (e.response.status === 409) {
        setError('이미 존재하는 아이디입니다.');
      }
    }
  };
  render() {
    const { form, error } = this.props;
    return (
      <AuthForm
        type="register"
        form={form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

export default connect(
  state => ({
    form: state.auth.register,
    error: state.auth.error,
    authorization: state.auth.authorization,
    user: state.user.user
  }),
  {
    changeField,
    setError,
    register,
    check
  }
)(withRouter(RegisterForm));
