'use client';
import { useState, useEffect } from 'react';

export default function TypeWriter({ text, speed = 50, className }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-[4px] h-[1.3em] bg-violet-400 ml-2 align-middle rounded" style={{ animation: 'blink 1s step-end infinite' }}></span>
    </span>
  );
}