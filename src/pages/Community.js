import './Community.css';

const Community = () => {
  const discussions = [
    {
      id: 1,
      author: 'Rajesh Kumar',
      topic: 'Best practices for organic honey production',
      replies: 12,
      time: '2 hours ago',
    },
    {
      id: 2,
      author: 'Priya Sharma',
      topic: 'How to market pickles in urban areas?',
      replies: 8,
      time: '5 hours ago',
    },
    {
      id: 3,
      author: 'Amit Patel',
      topic: 'Packaging solutions for dairy products',
      replies: 15,
      time: '1 day ago',
    },
    {
      id: 4,
      author: 'Sunita Devi',
      topic: 'Government schemes for rural entrepreneurs',
      replies: 20,
      time: '2 days ago',
    },
  ];

  return (
    <div className="community-page">
      <div className="community-container">
        <div className="community-header">
          <h1>Community Forum</h1>
          <p>Connect, share, and learn from fellow farmers</p>
          <button className="new-discussion-btn">Start New Discussion</button>
        </div>

        <div className="discussions-list">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="discussion-card">
              <div className="discussion-avatar">👤</div>
              <div className="discussion-content">
                <h3>{discussion.topic}</h3>
                <div className="discussion-meta">
                  <span className="author">By {discussion.author}</span>
                  <span className="time">{discussion.time}</span>
                </div>
              </div>
              <div className="discussion-stats">
                <div className="replies">
                  <span className="count">{discussion.replies}</span>
                  <span className="label">Replies</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
