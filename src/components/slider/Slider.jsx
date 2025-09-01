"use client";
import "./slider.css";
export default function Slider() {
  const quotes = [
    "Любовь — это когда даже тишина звучит как музыка.",
    "С тобой каждая минута — вечность счастья.",
    "Ты для меня больше, чем просто человек, ты — целый мир.",
    "Иногда одно объятие говорит больше, чем тысяча слов.",
    "Когда мы рядом, всё вокруг становится светлее.",
  ];

  return (
    <section className="quotes-slider">
      <div className="quotes-wrapper">
        {quotes.map((quote, i) => (
          <div key={i} className="quote-card">
            <p className="highlight">{quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
