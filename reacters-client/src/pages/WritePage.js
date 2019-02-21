import React from 'react';
import './WritePage.scss';
import Responsive from '../components/base/Responsive';
import EditorContainer from '../containers/write/EditorContainer';

const WritePage = () => {
  return (
    <div className="WritePage">
      <Responsive>
        <EditorContainer />
      </Responsive>
    </div>
  );
};

export default WritePage;
