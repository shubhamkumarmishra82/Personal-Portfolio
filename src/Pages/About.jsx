import React from "react";
 // add your about image here

export default function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        backgroundColor: "#ffffff", // White background
        color: "#000000", // Black text
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              background: "linear-gradient(90deg, #6a0dad, #9b30ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </h2>
          <p style={{ color: "#333333", fontSize: "1.1rem" }}>
            Get to know more about me
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left - Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
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
  alt="About"
  className="img-fluid rounded-circle shadow-lg"
  style={{ maxWidth: "350px" }}
/>
            
            </div>
          </div>

          {/* Right - Content */}
          <div className="col-md-7">
            <h3 className="fw-bold mb-3">
              I'm{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #6a0dad, #9b30ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Shubham Mishra
              </span>
            </h3>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              I am a passionate Frontend Developer and Full Stack Developer,
              skilled in building responsive and interactive web applications
              using modern technologies like React, Java, and Bootstrap.
            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              I love creating clean UI designs, solving real-world problems
              through code, and continuously learning new technologies to
              enhance my skills.
            </p>

            <a
              href="/resume.pdf"
              className="btn"
              style={{
                borderRadius: "30px",
                border: "2px solid #6a0dad",
                color: "#6a0dad",
                padding: "8px 25px",
              }}
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}