import '../App.css';
import Image from '../images/ImageandResultsComparison.png';

function ImageResults(){
    return(
        <div>
            <div>
                <div className = "navigation-container">
                    <ul>
                        <li><a href="./simulation">Simulation Runs</a></li>
                        <li><a href="./forceresults"> Force Results</a></li>
                        <li><a href="./result">Images and Results Comparison</a></li>
                    </ul>
                </div>
            </div>

            <div className = "image-results-box">
                <div className = "image-results-container">
                    <div><h2>Details of Case Comparison</h2></div>
                    <div>Case 1</div>
                    <div>Case 2</div>
                </div>

                    <div className = "row-container">
                        <div className = "row">
                            <img src = {Image} alt = "ImageofResults" />
                            <img src = {Image} alt = "ImageofResults" />

                        </div>


                        <div className = "row">
                            <img src = {Image} alt = "ImageofResults" />
                            <img src = {Image} alt = "ImageofResults" />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ImageResults;