import React, {useState} from 'react';
import { Menu } from 'antd';
import SimulationRuns from './PostProcessing/SimulationRuns';
import {Link} from 'react-router-dom';

function PostProcessing(){
    const items = [
        {
            key: 'alipay',
            label: (
              <Link to={SimulationRuns}>
                Simulation Runs
              </Link>
            ),
          },
          {
            key: 'alipay',
            label: (
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Force Results
              </a>
            ),
          },

          {
            key: 'alipay',
            label: (
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Images and Results Comparisons
              </a>
            ),
          },
    ]

    const [current,setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click', e);
        setCurrent(e.key);
    };

    return(
        <div>
            <Menu onClick = {onClick} selectKeys = {[current]} mode = "horizontal" items = {items}/>
        </div>
    )
}

export default PostProcessing;