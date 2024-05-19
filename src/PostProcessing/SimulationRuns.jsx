import '../App.css';
import SimulationRunsImage from '../images/SimulationRunsImage.png';

function SimulationRuns(){
    return(
        <div>
            <div className = "navigation-container">
                <ul>
                    <li><a href="./simulation">Simulation Runs</a></li>
                    <li><a href="./forceresults"> Force Results</a></li>
                    <li><a href="./result">Images and Results Comparison</a></li>
                </ul>
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