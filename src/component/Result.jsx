import React from 'react';

function Result({ score, total, answers, onRetry }) {
  return (
    <div className='score-section'>
      <h1>Score: {score} out of {total}</h1>
      <div>
        <h2>Answers:</h2>
        {answers.map((answer, index) => (
          <div key={index}>
            <h3>{answer.question}</h3>
            <p>Your answer: {answer.answer} - {answer.isCorrect ? "Correct" : "Incorrect"}</p>
          </div>
        ))}
      </div>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

export default Result;

