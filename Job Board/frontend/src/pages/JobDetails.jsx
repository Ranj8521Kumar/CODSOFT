// src/pages/JobDetail.js
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/jobDetail.css';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details based on `id`
    fetch(`/api/jobs/${id}`)
      .then(response => response.json())
      .then(data => setJob(data))
      .catch(error => console.error('Error fetching job details:', error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <div className="description">
        <p>{job.description}</p>
      </div>
      <div className="apply-section">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Cover Letter"></textarea>
        <input type="file" />
        <button>Submit Application</button>
      </div>
    </div>
  );
};

export default JobDetail;
