import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Flashcard = ({ courseId }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const response = await axios.get(`http://localhost:5000/api/flashcards/${courseId}`);
      setFlashcards(response.data);
    };
    fetchFlashcards();
  }, [courseId]);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div>
      {flashcards.length > 0 ? (
        <div onClick={handleFlip} style={{ cursor: 'pointer', padding: '20px', border: '1px solid black' }}>
          {flipped ? flashcards[currentCard].backText : flashcards[currentCard].frontText}
        </div>
      ) : (
        <p>No flashcards available</p>
      )}
    </div>
  );
};

export default Flashcard;
