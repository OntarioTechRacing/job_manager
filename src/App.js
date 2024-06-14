import './App.css';
import FileUpload from './FileUpload';
import PostProcessing from './PostProcessing';
import ForceResult from './PostProcessing/ForceResults';
import Result from './PostProcessing/ImageResults';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import NewAccount from './NewAccount';
import Run from './PostProcessing/Run';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />  {/* Use Route component for each route */}
        <Route path="/login" element={<Login />} />
        <Route path = "/login/newaccount" element = {<NewAccount/> } />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/post" element={<PostProcessing />} />
        <Route path="/simulation" element={<PostProcessing />} />
        <Route path="/forceresults" element={<ForceResult />} />
        <Route path="/result" element={<Result />} />
        <Route path = "/simulation/run" element = {<Run/>} />
      </Routes>
    </div>
  );
}

export default App;
