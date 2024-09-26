import React, { useState } from 'react';
import Question from './component/Question';
import Result from './component/Result';
import './App.css'

const questions = [
  {
    questionText: " React is a ____ library",
    answerOptions: [
      { answerText: "xml ", isCorrect: false },
      { answerText: "css", isCorrect: false },
      { answerText: "javascript", isCorrect: true },
      { answerText: "python", isCorrect: false },
    ],
  },
  {
    questionText: "Props in react stands for____?",
    answerOptions: [
      { answerText: "proper", isCorrect: false },
      { answerText: "properties", isCorrect: true },
      { answerText: "proprietary", isCorrect: false },
      { answerText: "proposition", isCorrect: false },
    ],
  },
  // {
  //   questionText: "React Event are written in____?",
  //   answerOptions: [
  //     { answerText: "lowerCase", isCorrect: false },
  //     { answerText: "none ", isCorrect: false },
  //     { answerText: "upperCase", isCorrect: false },
  //     { answerText: "camelCase", isCorrect: true },
  //   ],

  // },
  // {
  //   questionText: "these are example of hooks, except one?",
  //   answerOptions: [
  //     { answerText: "useState", isCorrect: false },
  //     { answerText: "useCallback", isCorrect: true },
  //     { answerText: "useEffect", isCorrect: false },
  //     { answerText: "useRef", isCorrect: false },
  //   ],
  // },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const handleAnswerButtonClick = (isCorrect, answerText, index) => {
    setSelectedAnswerIndex(index);
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswers([...answers, { question: questions[currentQuestion].questionText, answer: answerText, isCorrect }]);
    setAnswerSelected(true);
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerSelected(false);
      setSelectedAnswerIndex(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRetryButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswers([]);
    setAnswerSelected(false);
    setSelectedAnswerIndex(null);
  };

  return (
    <div className='app'>
    <div className='header'><h1>REACT </h1></div>
      {showScore ? (
        <Result score={score} total={questions.length} answers={answers} onRetry={handleRetryButtonClick} />
      ) : (
        <>
          <Question
            question={questions[currentQuestion]}
            handleAnswerButtonClick={handleAnswerButtonClick}
            answerSelected={answerSelected}
            selectedAnswerIndex={selectedAnswerIndex}
          />
          {answerSelected && <button onClick={handleNextButtonClick}>Next</button>}
        </>
      )}
    </div>
  );
}

export default App;
