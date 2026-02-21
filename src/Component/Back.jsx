import React, { useState, useEffect } from "react";

export default function Back() {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#6a0dad",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "15px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            zIndex: 1000,
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9b30ff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6a0dad")}
        >
          ↑
        </button>
      )}
    </>
  );
}