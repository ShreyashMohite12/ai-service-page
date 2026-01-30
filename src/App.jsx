import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const form = useRef();
  const contactSectionRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_etye0hk",
        "template_52kn8is",
        form.current,
        "UcNB_rmbohPkDmH-S"
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message. Please try again.")
      );
  };

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <section
        className="d-flex justify-content-center align-items-center text-center text-white px-3"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1a1a40, #3f0071, #ff007f, #00f0ff)",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          <h1 className="display-4 fw-bold">AI Consulting Services</h1>
          <p className="lead mt-3 mb-4">
            Innovating tomorrow with intelligent solutions
          </p>
          <button
            className="btn btn-outline-light btn-lg shadow"
            onClick={scrollToContact}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container-fluid py-5">
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#3f0071" }}>
          Our Services
        </h2>
        <div className="row justify-content-center g-4">
          {[
            {
              icon: "bi-lightbulb",
              title: "AI Strategy",
              color: "#ff007f",
              text: "Tailored AI roadmaps to accelerate your business growth.",
            },
            {
              icon: "bi-gear",
              title: "Automation",
              color: "#00f0ff",
              text: "Streamline workflows with intelligent automation solutions.",
            },
            {
              icon: "bi-bar-chart",
              title: "Data Insights",
              color: "#3f0071",
              text: "Transform raw data into actionable business intelligence.",
            },
          ].map((service, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow border-0">
                <div className="card-body text-center">
                  <i
                    className={`bi ${service.icon} display-4`}
                    style={{ color: service.color }}
                  ></i>
                  <h5 className="card-title mt-3">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-5 text-white text-center px-3"
        style={{ background: "linear-gradient(135deg, #3f0071, #1a1a40)" }}
      >
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          <h2 className="fw-bold">About Us</h2>
          <p className="mt-3 fs-5">
            We are a team of AI experts dedicated to helping organizations
            embrace the future of technology with confidence and clarity.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container-fluid py-5" ref={contactSectionRef}>
        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: "#ff007f" }}
        >
          Contact Us
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto shadow-lg p-4 rounded"
          style={{ maxWidth: "600px", background: "#f8f9fa" }}
        >
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn w-100 fw-bold text-white"
            style={{ background: "#3f0071" }}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer
        className="text-white text-center py-3 px-3"
        style={{ background: "linear-gradient(135deg, #1a1a40, #3f0071)" }}
      >
        <p className="mb-0">
          © 2026 AI Consulting Business | Designed with ⚡ React + Bootstrap
        </p>
      </footer>
    </div>
  );
}

export default App;