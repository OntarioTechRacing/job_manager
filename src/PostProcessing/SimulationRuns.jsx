import '../App.css';

function SimulationRuns(){
    return(
        <div className = "simulationRuns-container">
            <ol>
                <li>Date/Time</li>
                <li>Parameters</li>
                <li>Pressure Coefficients</li>
                <li>Lift and drag coefficients</li>
                <li>Vorticity</li>
                <li>Boundary Layer Thickness</li>
                <li>Outcome</li>
            </ol>
        </div>
    )
}

export default SimulationRuns;