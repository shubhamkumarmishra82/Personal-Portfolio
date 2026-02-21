import "../Assets/Css/Footer.css"
export default function Footer() {
  return (
    <footer
      className="py-4"
      style={{
        background: "linear-gradient(135deg, #6a0dad, #9b30ff)", // strong purple gradient
        color: "#ffffff",
      }}
    >
      <div className="container text-center">
        {/* Social Media Links */}
        <div className="mb-3">
          <a
         
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-white fs-4"
            style={{ transition: "0.3s" }}
          >
            <i className="fab fa-github  "></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-white fs-4"
            style={{ transition: "0.3s" }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-white fs-4"
            style={{ transition: "0.3s" }}
          >
            <i className="fab fa-facebook"></i>
          </a>
           <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-white fs-4"
            style={{ transition: "0.3s" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Quick Links */}
        <div className="mb-2">
          <a
            href="#"
            className="text-white text-decoration-none mx-2"
            style={{ transition: "0.3s" }}
          >
            Home
          </a>
           <a
            href="#about"
            className="text-white text-decoration-none mx-2"
            style={{ transition: "0.3s" }}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white text-decoration-none mx-2"
            style={{ transition: "0.3s" }}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-white text-decoration-none mx-2"
            style={{ transition: "0.3s" }}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-white text-decoration-none mx-2"
            style={{ transition: "0.3s" }}
          >
            Contact
          </a>
        </div>

        {/* Divider */}
        <hr
          style={{
            borderColor: "rgba(255,255,255,0.3)",
            margin: "1rem 0",
          }}
        />

        {/* Copyright */}
        <div style={{ fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} Shubham Mishra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}