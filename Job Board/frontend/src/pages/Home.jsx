// src/pages/Home.js
import { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import '../styles/home.css';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs data here
    setJobs([
      { id: 1, title: 'Software Engineer', location: 'New York', category: 'IT', company: 'TechCorp' },
      { id: 2, title: 'Graphic Designer', location: 'San Francisco', category: 'Design', company: 'DesignInc' },
    ]);
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Job Board</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search jobs" />
        <select>
          <option>Location</option>
          <option>New York</option>
          <option>San Francisco</option>
        </select>
        <button>Find Job</button>
      </div>
      <div className="job-listings">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
