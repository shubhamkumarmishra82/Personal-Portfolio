import "../Assets/Css/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2>About Me</h2>
          <p>Get to know more about me</p>
        </div>

        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="img-container">
              <img
                src="/Images/rahul.png"
                alt="About"
                className="about-img"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="col-md-7 text-md-start text-center">
            <h3>
              I'm <span>Shubham Mishra</span>
            </h3>
            <p className="content">
              I am a passionate Full Stack Developer,
              skilled in building responsive and interactive web applications
              using modern technologies like React, Java, and Bootstrap.
            </p>
            <p className="content">
              I love creating clean UI designs, solving real-world problems
              through code, and continuously learning new technologies to
              enhance my skills.
            </p>
            <a href="/resume.pdf" className="about-btn" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}