import React from "react";

const skills = [
  { name: "HTML", level: 90, color: "#6a0dad" },
  { name: "CSS", level: 75, color: "#9b30ff" },
  { name: "JavaScript", level: 85, color: "#ff9900" },
    { name: "React", level: 50, color: "#61dafb" },
  { name: "Java", level: 80, color: "#007396" },
  { name: "MySQL", level: 80, color: "#f29111" },
  { name: "Git & GitHub", level: 85, color: "#f05032" },

];

export default function Skill() {
  return (
    <section
      id="skills"
      className="py-5"
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
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
            My Skills
          </h2>
          <p style={{ color: "#333333", fontSize: "1.1rem" }}>
            Technologies I work with
          </p>
        </div>

        {/* Skills List */}
        <div className="row g-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <h5 className="fw-bold">{skill.name}</h5>
              <div className="progress" style={{ height: "12px", borderRadius: "8px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}