import './App.css';
import FileUpload from './FileUpload';
import PostProcessing from './PostProcessing';
import ForceResult from './PostProcessing/ForceResults';
import ImageResult from './PostProcessing/ImageResults';
import SimulationRuns from './PostProcessing/SimulationRuns';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = <FileUpload/> />
        <Route path = "/post" element = <PostProcessing/> />
        <Route path = "/simulation" element = <SimulationRuns/> />
        <Route path = "/forceresults" element = <ForceResult/> />
        <Route path = "/imageresults" element = <ImageResult/> />
      </Routes>
      
    </div>
  );
}

export default App;
