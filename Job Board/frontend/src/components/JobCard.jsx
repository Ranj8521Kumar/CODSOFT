// src/components/JobCard.js
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/jobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-details">
        <h3>{job.title}</h3>
        <p>{job.location}</p>
        <p>{job.category}</p>
        <p>{job.company}</p>
      </div>
      <Link to={`/job/${job.id}`}>
        <button className="apply-button">Apply Now</button>
      </Link>
    </div>
  );
};
JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
