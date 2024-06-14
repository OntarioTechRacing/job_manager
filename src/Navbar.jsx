import otrLogo from './images/otrLogo.png';
import './App.css';
import {FileAddOutlined,BarChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className ="navbar-container">
            <div className="nav-items">
                <Link to = "./">
                    <img src = {otrLogo} alt = "OTR LOGO" width = "100"/>
                </Link>
            </div>

            <div className="nav-items"> 

                <Link to = "./FileUpload">
                    <FileAddOutlined /> File Upload 
                </Link>
            </div>

            <div className="nav-items"> 
                <Link to = "./Post">
                    <BarChartOutlined />Post Processing Section
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
