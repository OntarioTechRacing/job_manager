import './App.css';
import DashboardImage from './images/DashboardImage.png';
// import FilePlaceholder from './images/FilePlaceholder.png';
import Navbar from './Navbar';

function Dashboard(){
    return(
        <div>
            <Navbar/>

            <div className="dashboard-titles">
                <div><h2>Welcome to CFD Simulations</h2></div>
                <div><h4>View progess and compare cases</h4></div>
            </div>
            <div><img src = {DashboardImage} alt = "Dashboard" /></div>

            <div className="dashboard-titles">
                <div><h2>Case Uploads</h2></div>
                <div><h4>My Files</h4></div>
            </div>
                <div className = "cases-container">
                    <div className = "case-item-container">
                        <div className = "case-title">
                            {/* <div className = "case-image-container"><img src = {FilePlaceholder} alt = "FilePlaceholder" /></div> */}
                            <div>File Name</div>
                            <div>Date: 12/03/2023</div>
                        </div>
                    </div>

                    <div className = "case-item-container">
                        <div className = "case-title">
                            <div>File Name</div>
                            <div>Date: 12/03/2023</div>
                        </div>
                    </div>

                    <div className = "case-item-container">
                        <div className = "case-title">
                            <div>File Name</div>
                            <div>Date: 12/03/2023</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard;