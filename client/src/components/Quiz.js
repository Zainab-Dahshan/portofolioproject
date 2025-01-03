import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = ({ courseId }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await axios.get(`http://localhost:5000/api/quizzes/${courseId}`);
      setQuizzes(response.data);
    };
    fetchQuizzes();
  }, [courseId]);

  const handleAnswer = (questionIdx, answer) => {
    setUserAnswers({ ...userAnswers, [questionIdx]: answer });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quizzes.forEach((quiz, index) => {
      if (userAnswers[index] === quiz.questions[index].answer) correctAnswers += 1;
    });
    setScore(correctAnswers);
  };

  return (
    <div>
      <h3>Quiz</h3>
      {quizzes.map((quiz, i) => (
        <div key={i}>
          <h4>{quiz.title}</h4>
          {quiz.questions.map((question, idx) => (
            <div key={idx}>
              <p>{question.question}</p>
              {question.options.map((option, optIdx) => (
                <button
                  key={optIdx}
                  onClick={() => handleAnswer(idx, option)}
                  style={{
                    backgroundColor: userAnswers[idx] === option ? 'lightgreen' : 'white',
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}
      <button onClick={calculateScore}>Submit</button>
      {score !== null && <p>Your Score: {score}/{quizzes.length}</p>}
    </div>
  );
};

export default Quiz;

