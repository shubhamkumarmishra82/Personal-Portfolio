import { useState, useEffect } from "react";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import Back from "../Component/Back";
import "../Assets/Css/Home.css";

export default function Home() {
  const texts = ["Full Stack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = deleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(currentText.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === currentText.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentText.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, deleting, textIndex, texts]);

  return (
    <>
      <section id="home" className="home-section d-flex align-items-center">
        <div className="container text-center home-content">
          <h1 className="home-title">
            Hi, I'm{" "}
            <span className="home-name">
              Shubham Mishra
            </span>
          </h1>

          <h3 className="home-role">
            {displayText}
            <span className="home-cursor">|</span>
          </h3>

          <p className="home-description">
            I build responsive and modern web applications using React , bootstrap and java .
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-home" style={{background: "linear-gradient(90deg, #6a0dad, #9b30ff)"}}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline-dark btn-home">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <About />
      <Project />
      <Skill />
      <Contact />
      <Back />
    </>
  );
}