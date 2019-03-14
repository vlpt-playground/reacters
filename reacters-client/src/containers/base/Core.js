import { Component } from 'react';
import { connect } from 'react-redux';
import { check, tempSetUser } from '../../modules/user';
import { setToken } from '../../lib/api/client';

class Core extends Component {
  initialize = () => {
    // 로그인 설정 불러오기
    const user = localStorage.getItem('user');
    const authorization = localStorage.getItem('authorization');
    if (!user) return;
    this.props.tempSetUser(JSON.parse(user));
    if (!authorization) return;
    const parsedAuth = JSON.parse(authorization);
    setToken(`Bearer ${parsedAuth.access_token}`);
    this.props.check();
  };
  componentDidMount() {
    this.initialize();
  }

  render() {
    return null;
  }
}

export default connect(
  () => ({}),
  { check, tempSetUser }
)(Core);