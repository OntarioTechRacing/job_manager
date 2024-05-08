import './App.css';
import FileUpload from './FileUpload';
import PostProcessing from './PostProcessing';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = <FileUpload/> />
        <Route path = "/post" element = <PostProcessing/> />
      </Routes>
      
    </div>
  );
}

export default App;
