import React from 'react';
import { MdNoteAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './WritePostButton.scss';

const WritePostButton = () => {
  return (
    <Link to="/write" className="WritePostButton">
      <MdNoteAdd />
      <div className="text">새 글 작성하기</div>
    </Link>
  );
};

export default WritePostButton;
