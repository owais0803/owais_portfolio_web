import '../styles/Skills.css';

function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Java']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <h3>{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.skills.map((skill, i) => (
                <div key={i} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;