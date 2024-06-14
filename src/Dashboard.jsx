import './App.css';
import DashboardImage from '../images/DashboardImage.png';
// import FilePlaceholder from './images/FilePlaceholder.png';
import Navbar from './Navbar';
import SimulationRunsImage from './images/SimulationsRunsImage.png';
import { Link } from 'react-router-dom'

function Dashboard(){
    return(
        <div>
            <div className="dashboard-container">
            <div className="dashboard-nav-container">
                <Navbar/>
            </div>
            <div className="flex-container">
            
            <div className="dashboard-titles-container">
                <div className="dashboard-titles">
                    <div><h2>Welcome to CFD Simulations</h2></div>
                    <div><h4>View progess and compare cases</h4></div>
                </div>

                <div>
                    <button>
                        <Link to = "./Login">
                            Login
                        </Link>
                    </button>
                </div>
                <div className="dashboard-img"><img src = {DashboardImage} alt = "Dashboard" /></div>
            </div>
            <div className="case-titles-container">

                <div><h2>Case Uploads</h2></div>
                <div><h4>My Files</h4></div>

                <button className="addFile-btn">
                    <Link to = {"./FileUpload"}>                    
                        Add File 
                    </Link>
                </button>

                    <div className = "cases-container">
                        <div className = "case-item-container">
                            <div className = "case-title">
                                <div className = "case-image-container"><img src = {SimulationRunsImage} alt = "FilePlaceholder" /></div>
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

                        <div className = "case-item-container">
                            <div className = "case-title">
                                <div>File Name</div>
                                <div>Date: 12/03/2023</div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <button className="loadMore-btn">
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Dashboard;