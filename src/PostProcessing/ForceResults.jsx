import '../App.css';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import PostProcessingImage from '../images/PostProcessingGraph.png';

function ForceResults(){
    return(
        <div className="force-results-container">
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

            <div className="flexbox-container">
                <div className="force-results-container">
                    <div>Property Panel</div>
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

                {/* <div>
                    <img src = {PostProcessingImage} alt="PostProcessingImage" />
                </div> */}
            </div>
        </div>
    )
}

export default ForceResults;