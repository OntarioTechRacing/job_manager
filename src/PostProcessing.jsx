import './App.css';
import React from 'react';

function PostProcessing(){
    return(
      <div>
        <div className = "navigation-container">
            <ul>
                <li><a href="./simulation">Simulation Runs</a></li>
                <li><a href="./forceresults"> Force Results</a></li>
                <li><a href="./result">Images and Results Comparison</a></li>
            </ul>
        </div>
      </div>
)
}

export default PostProcessing;