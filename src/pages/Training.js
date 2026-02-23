import './Training.css';

const Training = () => {
  const trainings = [
    {
      id: 1,
      title: 'Value Addition Techniques',
      duration: '4 weeks',
      level: 'Beginner',
      description: 'Learn how to add value to your agricultural products',
    },
    {
      id: 2,
      title: 'Organic Farming Practices',
      duration: '6 weeks',
      level: 'Intermediate',
      description: 'Master organic farming methods for better yields',
    },
    {
      id: 3,
      title: 'Marketing & Sales',
      duration: '3 weeks',
      level: 'Beginner',
      description: 'Effective strategies to market your farm products',
    },
    {
      id: 4,
      title: 'Food Processing & Packaging',
      duration: '5 weeks',
      level: 'Advanced',
      description: 'Professional food processing and packaging techniques',
    },
  ];

  return (
    <div className="training-page">
      <div className="training-container">
        <div className="training-header">
          <h1>Training Programs</h1>
          <p>Enhance your skills with expert-led training courses</p>
        </div>

        <div className="training-grid">
          {trainings.map((training) => (
            <div key={training.id} className="training-card">
              <div className="training-badge">{training.level}</div>
              <h3>{training.title}</h3>
              <p className="training-description">{training.description}</p>
              <div className="training-meta">
                <span>⏱️ {training.duration}</span>
              </div>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
