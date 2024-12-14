// src/pages/EmployerDashboard.js
import { useState } from 'react';
import JobCard from '../components/JobCard';
import '../styles/dashboard.css';

const EmployerDashboard = () => {
  const [jobs] = useState([
    { id: 1, title: 'Software Engineer', location: 'New York', company: 'TechCorp' },
    { id: 2, title: 'Product Manager', location: 'San Francisco', company: 'ProductX' },
  ]);

  return (
    <div className="dashboard">
      <h2>Employer Dashboard</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default EmployerDashboard;
