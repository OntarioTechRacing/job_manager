import './App.css';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function PostProcessing(){
    return(
      <div className = "navigation-container">
        <Nav 
            activeKey="/"
            onSelect ={(selectedKey)=> alert(`selected ${selectedKey}`)}>
        <div className = "nav-item">
            <Nav.Item>
                <Nav.Link as = {NavLink} to = "/simulation"> Simulation Runs</Nav.Link>
            </Nav.Item>
        </div>

        <div className = "nav-item">
          <Nav.Item>
              <Nav.Link as={NavLink} to = "/forceresults">Image Results</Nav.Link>
          </Nav.Item>
        </div>

          <div className = "nav-item">
            <Nav.Item>
                <Nav.Link as={NavLink} to = "/imageresults">Image Results</Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
  </div>
)
}

export default PostProcessing;