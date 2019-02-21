import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { connect } from 'react-redux';
import { changeField, setError, login } from '../../modules/auth';
import { setToken } from '../../lib/api/client';
import { check } from '../../modules/user';

class LoginForm extends Component {
  handleChange = e => {
    const { value, name } = e.target;
    this.props.changeField({
      mode: 'login',
      key: name,
      value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { form, login, setError, check } = this.props;
    const { username, password } = form;
    setError(null);
    try {
      await login({
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
        console.log(e);
      }
      if (e.response.status === 401) {
        setError('로그인 실패');
      }
    }
  };
  render() {
    const { form, error } = this.props;
    return (
      <AuthForm
        type="login"
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
    form: state.auth.login,
    error: state.auth.error,
    authorization: state.auth.authorization,
    user: state.user.user
  }),
  {
    changeField,
    setError,
    login,
    check
  }
)(withRouter(LoginForm));
