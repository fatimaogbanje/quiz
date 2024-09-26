 import React from 'react';

function Question({ question, handleAnswerButtonClick, answerSelected, selectedAnswerIndex }) {
    return (
      <div className='question-section'>
        <div className='question-text'>{question.questionText}</div>
        <div className='answer-section'>
          {question.answerOptions.map((answerOption, index) => (
            <button
              key={index}
              onClick={() => handleAnswerButtonClick(answerOption.isCorrect, answerOption.answerText, index)}
              className={selectedAnswerIndex === index ? 'selected' : ''}
              disabled={answerSelected}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default Question;
  