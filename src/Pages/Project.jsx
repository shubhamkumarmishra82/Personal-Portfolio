import React from "react";

// Example project data
const projectList = [
  {
    title: "ATM-Management-System",
    description: "The ATM Management System is a software application designed to simulate the functionalities of a real-world ATM. It allows users to perform banking operations securely and efficiently.",
    img: "/Images/project1.png",
    link: "#", 
  },
  {
    title: "College-Management-System",
    description: "The College Management System helps manage student and faculty info efficiently, featuring a dashboard to add/view details, manage leaves, and handle student fee submissions.",
    img: "/Images/project2.png",
    link: "#",
  },
  {
    title: "News-App",
    description: "The News App delivers the latest news in categories like Crime, Education, Economy, Technology, Sports, and Cricket. It has a responsive navbar for easy navigation.",
    img: "/Images/project3.png",
    link: "#",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#ffffff", color: "#000000" }}
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
            My Projects
          </h2>
          <p style={{ color: "#333333", fontSize: "1.1rem" }}>
            Here are some of the projects I have worked on
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projectList.map((project, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 d-flex flex-column">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    objectFit: "cover",
                    height: "200px",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5
                    className="card-title fw-bold"
                    style={{
                      background: "linear-gradient(90deg, #6a0dad, #9b30ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {project.title}
                  </h5>
                  <p className="card-text flex-grow-1" style={{ textAlign: "justify" }}>{project.description}</p>
                  <a
                    href={project.link}
                    className="btn mt-3"
                    style={{
                      backgroundColor: "#6a0dad",
                      color: "#ffffff",
                      borderRadius: "30px",
                      padding: "5px 20px",
                      alignSelf: "flex-start",
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}