import React, { Component } from 'react';
import './EditorHead.scss';
import Responsive from '../base/Responsive';
class EditorHead extends Component {
  state = {
    scrolling: false
  };
  handleScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const scrolling = scrollTop > 0;
    if (this.state.scrolling === scrolling) return;
    this.setState({
      scrolling
    });
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { onSubmit, onCancel } = this.props;
    return (
      <>
        <div
          className={[
            'EditorHead',
            this.state.scrolling ? 'scrolling' : ''
          ].join(' ')}
        >
          <Responsive className="wrapper">
            <button className="cancel" onClick={onCancel}>
              취소
            </button>
            <button className="submit" onClick={onSubmit}>
              작성하기
            </button>
          </Responsive>
        </div>
        <div className="padding" />
      </>
    );
  }
}

export default EditorHead;
