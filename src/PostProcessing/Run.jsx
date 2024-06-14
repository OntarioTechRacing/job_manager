import '../App.css';
import RunsImage from '../images/RunsImage.png';

function Run(){
    return(    

    <div>
        <div className="runsTitles-container">
            <div>
                <h3>Simulation Run</h3>
            </div>

            <div className="buttons-container">
                <button className="results-btn">
                    Results
                </button>

                <button className="save-btn">
                    Save
                </button>
            </div>
        </div>

        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod justo in eros volutpat, vitae laoreet ante lacinia. 
                Sed eget ultricies neque. Integer vitae mauris eu justo posuere ultricies. Ut quis lectus sit amet sapien bibendum accumsan. 
                Integer nec urna aliquam, molestie felis eu, volutpat orci. Quisque placerat interdum turpis, vel accumsan mi faucibus id. 
                Duis ut diam rutrum, maximus justo eget, lacinia felis. Aenean at ultricies orci. Sed ultrices justo vel erat volutp
            </p>
        </div>
        <div>
            <div className="simulationRuns-container">
            <div className="runs-container">
                <h3> Run Information </h3>
                <div className="run-container">
                    <div> Run Name </div>
                    <div className="run-information-container"> Run 2 </div>
                </div>

                <div className="run-container">
                    <div> Author Name </div>
                    <div className="run-information-container"> John Doe </div>

                </div>

                <div className="run-container">
                    <div> Creation Date </div>
                    <div className="run-information-container"> 2023-01-20  14:12 </div>
                </div>

                <div className="run-container">
                    <div> Last Modified </div>
                    <div className="run-information-container"> 2023-10-22 12:02 </div>
                </div>

                <div className="run-container">
                    <div>Start Time</div>
                    <div className="run-information-container"> 2023-01-20  14:12 </div>

                </div>

                <div className="run-container">
                    <div>End Time</div>
                    <div className="run-information-container"> 2024-12-03 20:52 </div>

                </div>

                <div className="run-container">
                    <div>Status</div>
                    <div className="run-information-container"> Finished </div>

                </div>

                <div className="run-container">
                    <div>Runtime(min)</div>
                    <div className="run-information-container"> 142 minutes </div>

                </div>

                <div className="run-container">
                    <div>Result Size</div>
                    <div className="run-information-container"> 512 megabytes </div>
                </div>
            </div>

            <div>
                
            </div>

        <div>
            <img src = {RunsImage}/>
        </div>
        </div>

        </div>
    </div>
)
}

export default Run;

