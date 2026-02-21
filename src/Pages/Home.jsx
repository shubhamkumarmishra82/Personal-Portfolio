import { useState, useEffect } from "react";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import Back from "../Component/Back";

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
      <section
        id="home"
        className="d-flex align-items-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <div className="container px-3 mt-5">
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6 text-md-start text-center">
              <h1
                className="fw-bold text-wrap mt-5"
                style={{ fontSize: "2.5rem" }}
              >
                Hi, I'm{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #6a0dad, #9b30ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Shubham Mishra
                </span>
              </h1>

              <h3
                className="mt-3 text-wrap"
                style={{ color: "#4b0082", fontSize: "1.5rem" }}
              >
                {displayText}
                <span className="ms-1" style={{ color: "#6a0dad" }}>
                  |
                </span>
              </h3>

              <p className="mt-3" style={{ fontSize: "1.1rem" }}>
                I build responsive and modern web applications using React,
                Java, and Bootstrap.
              </p>

              <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3">
                <a
                  href="#projects"
                  className="btn"
                  style={{
                    backgroundColor: "#6a0dad",
                    color: "white",
                    borderRadius: "30px",
                    padding: "10px 25px",
                  }}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-dark"
                  style={{ borderRadius: "30px", padding: "10px 25px" }}
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-md-6 text-center mt-5 mt-md-0">
              <div
                style={{
                  display: "inline-block",
                  padding: "10px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6a0dad, #9b30ff)",
                }}
              >
                <img
                  src="/Images/rahul.png"
                  alt="Profile"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{
                    maxWidth: "350px",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Project/>
      <Skill/>
      <Contact/>
      <Back/>
    </>
  );
}