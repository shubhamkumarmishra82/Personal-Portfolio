import { useState, useEffect } from "react";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import Back from "../Component/Back";
import "../Assets/Css/Home.css";

/* ✅ Move texts outside component */
const texts = ["Full Stack Developer"];

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = deleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (index < currentText.length) {
          setDisplayText(currentText.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        if (index > 0) {
          setDisplayText(currentText.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, deleting, textIndex]); // ✅ texts removed

  return (
    <>
      <section id="home" className="home-section d-flex align-items-center">
        <div className="container text-center home-content">
          <h1 className="home-title">
            Hi, I'm <span className="home-name">Shubham Mishra</span>
          </h1>

          <h3 className="home-role">
            {displayText}
            <span className="home-cursor">|</span>
          </h3>

          <p className="home-description">
            I build responsive and modern web applications using React,
            Bootstrap and Java.
          </p>

          <div className="home-buttons">
            <a
              href="#projects"
              className="btn btn-home"
              style={{
                background:
                  "linear-gradient(90deg, #6a0dad, #9b30ff)",
                color: "#fff",
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn btn-outline-dark btn-home"
            >
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