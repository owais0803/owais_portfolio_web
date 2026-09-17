import '../styles/Hero.css';

function Hero() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/files/Owais_Resume.pdf';
    link.download = 'Owais_Khan_Resume.pdf';
    link.click();
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Owais</h1>
        <p>Full Stack Developer | React | Node.js | Java</p>
        <p className="hero-desc">Building awesome web applications</p>
        <button className="cta-button" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;