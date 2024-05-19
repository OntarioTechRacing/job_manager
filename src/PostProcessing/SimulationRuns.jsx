import '../App.css';
import SimulationRunsImage from '../images/SimulationRunsImage.png';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

function SimulationRuns(){
    return(
        <div>
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

            <div className = "simulationRuns-container">
                <div className = "simulation-run-item">
                    
                    <div>Simulation Run 1</div>

                    <div>
                        <img src = {SimulationRunsImage} alt = "Simulation Runs" />
                    </div>

                    <div>Date/Time</div>
                    <div>Parameters</div>
                    <div>Pressure Coefficients</div>
                    <div>Lift and drag coefficients</div>
                    <div>Vorticity</div>
                    <div>Boundary Layer Thickness</div>
                    <div>Outcome</div>
                </div>

                <div className = "simulation-run-item">
                    <div>Simulation Run 2</div>

                    <div>
                        <img src = {SimulationRunsImage} alt = "Simulation Runs" />
                    </div>

                    <div>Date/Time</div>
                    <div>Parameters</div>
                    <div>Pressure Coefficients</div>
                    <div>Lift and drag coefficients</div>
                    <div>Vorticity</div>
                    <div>Boundary Layer Thickness</div>
                    <div>Outcome</div>
                </div>

                <div className = "simulation-run-item">
                    <div>Simulation Run 3</div>

                    <div>
                        <img src = {SimulationRunsImage} alt = "Simulation Runs" />
                    </div>

                    <div>Date/Time</div>
                    <div>Parameters</div>
                    <div>Pressure Coefficients</div>
                    <div>Lift and drag coefficients</div>
                    <div>Vorticity</div>
                    <div>Boundary Layer Thickness</div>
                    <div>Outcome</div>
                </div>
            </div>
        </div>
    )
}

export default SimulationRuns;