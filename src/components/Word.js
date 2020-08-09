import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  const renderWord = selectedWord.split('').map((letter, i) => {
    return (
      <span className="letter" key={i}>
        {correctLetters.includes(letter) ? letter : ''}
      </span>
    );
  });
  return (
    <div className="word" id="word">
      {renderWord}
    </div>
  );
};

export default Word;
