import otrLogo from './images/otrLogo.png';
import './App.css';
import {FileAddOutlined,BarChartOutlined } from '@ant-design/icons';

function Navbar(){
    return(
        <div>
            <div><img src = {otrLogo} alt = "OTR LOGO" width = "100"/></div>
            <div> File Upload <FileAddOutlined /></div>
            <div> Post Processing Section<BarChartOutlined /></div>
        </div>
    )
}

export default Navbar;
