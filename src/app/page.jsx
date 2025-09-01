"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Banner from "../components/hero1/Banner";
import Four from "../components/hero2/Four";
import Hero from "../components/hero3/Hero";
import HeroAfter from "../components/hero4/HeroAfter";
import HeroBefore from "../components/hero5/HeroBefore";
import Slider from "../components/slider/Slider";
export default function Home() {
  const audioRef = useRef(null);
  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // снимаем mute
        audioRef.current
          .play()
          .catch((e) => console.log("Ошибка воспроизведения:", e));
      }
    };
    document.addEventListener("click", enableSound, { once: true });
    document.addEventListener("scroll", enableSound, { once: true });
    document.addEventListener("keydown", enableSound, { once: true });

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
  }, []);
  return (
    <div className={styles.page}>
      {/* <audio ref={audioRef} autoPlay loop muted>
        <source src="/assets/сенин суротун.m4a" type="audio/mp4" />
        Ваш браузер не поддерживает аудио.
      </audio> */}
      <Banner />
      <Hero />
      <Four />
      <HeroAfter />
      <HeroBefore />
      <Slider />
    </div>
  );
}
