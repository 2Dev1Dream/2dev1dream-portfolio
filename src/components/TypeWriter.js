"use client";

import { useEffect, useState } from "react";

export default function TypeWriter ({ texts, speed = 100, pause = 1500}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState("");

  const currentText = texts[textIndex];

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText, speed, pause, texts]);

  return (
    <span className="whitespace-pre">
      {displayedText}<span className="animate-pulse"></span>
    </span>
  );
}

