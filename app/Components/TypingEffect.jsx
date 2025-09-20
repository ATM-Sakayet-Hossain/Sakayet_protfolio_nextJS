"use client";
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 1000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      // Deleting the word
      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing the word
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentText + currentWord[currentText.length]);
        }, typingSpeed);
      } else {
        // Word is fully typed, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    // When the word is fully deleted, move to the next word
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="typing-effect">
      <span>{currentText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;
