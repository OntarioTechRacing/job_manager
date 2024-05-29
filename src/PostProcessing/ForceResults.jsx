import '../App.css';
import React from 'react';
import PostProcessingImage from '../images/PostProcessingGraph.png';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function ForceResults(){
    const items = [
        {
            key: '1', 
            label:(
                <a target="_blank" rel="noopener noreferrer">
                    Slice Type
                </a>
            )
        }, 
        {
            key:'2', 
            label: (
                <a target="_blank" rel="noopener noreferrer">
                Origin
                </a>
            )
        }, 
        {
            key: '3', 
            label: (
                <div className="flex">
                    <a target="_blank" rel="noopener noreferrer">
                    Normal
                    </a>
                    <div className="parameters-results-container"></div>
                </div>

            )
        }, 
        {
            key: '4', 
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Crinkle Slice
                </a>
            )
        }, 
        {
            key: '5', 
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Show Panel
                </a>
            )
        }
    ]


    // const items2 = [
    //     {
    //         key: '1', 
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="/">
    //                 Opacity
    //             </a>
    //         )
    //     }, 

    //     {
    //         key: '2', 
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="/">
    //                 Render Mode
    //             </a>
    //         )
    //     }, 
    //     {
    //         key: '3', 
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="/">
    //                 Radius Mode
    //             </a>
    //         )
    //     }, 
    //     {
    //         key: '4', 
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="/">
    //                 Max Pixel Size
    //             </a>
    //         )
    //     }, 
    //     {
    //         key: '5', 
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="/">
    //                 Opacity Array
    //             </a>
    //         )
    //     }
    // ]

    return(
        <div>
            <div className = "force-results-title">
                <h2>Post Processing Section</h2>
            </div>

            <div className = "horizontal-line"></div>
            <div>
                <div className = "navigation-container">
                    <ul>
                        <li><a href="./simulation">Simulation Runs</a></li>
                        <li><a href="./forceresults"> Force Results</a></li>
                        <li><a href="./result">Images and Results Comparison</a></li>
                    </ul>
                </div>
            </div>
                {/* <div className = "force-horizontal-line"></div> */}
                    <div className="flex">
                        <div className="force-results-container">
                            <div className = "force-results-heading">Property Panel</div>

                            <Dropdown menu={{items,}}
                            >
                            <a onClick = {(e)=>e.preventDefault()}>
                                <Space>
                                    Source
                                    <DownOutlined/>
                                </Space>
                            </a>

                            </Dropdown>
{/* 
                            <Dropdown menu = {{items2,}}>
                                <a onClick = {(e)=>e.preventDefault()}>
                                    <Space>
                                        Representation
                                        <DownOutlined/>
                                    </Space>
                                </a>
                            </Dropdown> */}

                            </div>
                            <div>
                                <img src = {PostProcessingImage} alt="PostProcessingImage" />
                            </div>
                    </div>
            </div>
    )
}

export default ForceResults;