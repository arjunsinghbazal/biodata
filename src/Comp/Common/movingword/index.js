import React from 'react';
import './styles.css'; // Import your CSS file

function MovingWord({word}) {
  return (
    <div className="moving-word-container">
      <div className="moving-word">{word}</div>
    </div>
  );
}

export default MovingWord;
