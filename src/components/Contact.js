import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>Feel free to reach out to me!</p>
        <div className="contact-links">
          <a href="mailto:kowaiskhan763@gmail.com" className="contact-btn">Email Me</a>
          <a href="https://github.com/owais0803" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
          <a href="https://www.linkedin.com/in/owais-khan-362443211/" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;