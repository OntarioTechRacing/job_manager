import React, { useState } from 'react';
import './App.css';

const JobManager = () => {
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState('');

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submit job logic
    console.log('Submit job:', { fileName, description });
  };

  const handleSave = () => {
    // Handle save job logic
    console.log('Save job:', { fileName, description });
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Server Cluster Status</h1>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label>File Name:</label>
          <input
            type="text"
            id="file-name"
            value={fileName}
            onChange={handleFileNameChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
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
        </div>
      </div>
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
            <tr>
              <td>Job 1</td>
              <td>Running</td>
              <td>45%</td>
            </tr>
            <tr>
              <td>Job 2</td>
              <td>Completed</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Job 3</td>
              <td>Incomplete</td>
              <td>90%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobManager;
