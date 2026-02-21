import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been received.\n\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
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
            Contact Me
          </h2>
          <p style={{ color: "#333333", fontSize: "1.1rem" }}>
            Get in touch for projects or collaboration
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn"
                style={{
                  background: "linear-gradient(90deg, #6a0dad, #9b30ff)",
                  color: "white",
                  borderRadius: "30px",
                  padding: "10px 25px",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}