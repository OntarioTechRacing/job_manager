import React, { useState, useEffect } from 'react';
import './App.css';

const JobManager = () => {
  const [filename, setFilename] = useState('');
  const [description, setDescription] = useState('');
  const [jobs, setJobs] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/jobs/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setStatusMessage('Failed to fetch jobs. Please try again.');
    }
  };

  const handleFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    setStatusMessage('Submitting job...');
    try {
      const response = await fetch('http://127.0.0.1:8000/jobs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filename,
          description,
          status: 'incomplete',
          progress: 0,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Job submitted successfully:', data);
      setStatusMessage('Job submitted successfully!');
      fetchJobs(); // Refresh job list after submission
    } catch (error) {
      console.error('Error submitting job:', error);
      setStatusMessage('Failed to submit job. Please try again.');
    }
  };

  const handleSave = async () => {
    setStatusMessage('Saving job...');
    try {
      const response = await fetch(`http://127.0.0.1:8000/jobs/${filename}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'running',
          progress: 50,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Job updated successfully:', data);
      setStatusMessage('Job updated successfully!');
      fetchJobs();
    } catch (error) {
      console.error('Error updating job:', error);
      setStatusMessage('Failed to update job. Please try again.');
    }
  };

  const handleDelete = async () => {
    setStatusMessage('Deleting job...');
    try {
      const response = await fetch(`http://127.0.0.1:8000/jobs/${filename}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setStatusMessage('Job deleted successfully!');
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
      setStatusMessage('Failed to delete job.');
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Server Cluster Status</h1>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="file-name">File Name:</label>
          <input
            type="text"
            id="file-name"
            value={filename}
            onChange={handleFilenameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="button-group">
          <button onClick={handleSubmit}>Submit job</button>
          <button onClick={handleSave}>Save job</button>
          <button onClick={handleDelete}>Delete job</button>
        </div>
      </div>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      <div className="status-container">
        <h2>Job Status</h2>
        <table>
          <thead>
            <tr>
              <th>Job Name</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.filename}>
                <td>{job.filename}</td>
                <td>{job.status}</td>
                <td>{job.progress}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobManager;
