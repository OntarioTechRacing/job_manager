import '../App.css';
import PostProcessingImage from '../images/PostProcessingGraph.png';

function ForceResults(){
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

                    <div className="flex">
                        <div className="force-results-container">
                            <div><h2>Force Results</h2></div>
                                <div className = "force-results-heading">Property Panel</div>
                                <div>Source</div>
                                <div>Slice Type</div>
                                <div>Origin</div>
                                <div>Normal</div>
                                <div>Crinkle Slice</div>
                                <div>Show Panel</div>

                                <div>Representation</div>
                                <div>Opacity</div>
                                <div>Render Mode</div>
                                <div>Radius Mode</div>
                                <div>Max Pixel Size</div>
                                <div>Opacity Array</div>
                            </div>
                        <div>
                            <img src = {PostProcessingImage} alt="PostProcessingImage" />
                        </div>
                    </div>
            </div>
    )
}

export default ForceResults;