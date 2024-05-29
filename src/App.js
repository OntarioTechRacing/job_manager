import './App.css';
import FileUpload from './FileUpload';
import PostProcessing from './PostProcessing';
import ForceResult from './PostProcessing/ForceResults';
import Result from './PostProcessing/ImageResults';
import SimulationRuns from './PostProcessing/SimulationRuns';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import NewAccount from './NewAccount';
import Run from './PostProcessing/Run';

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Dashboard />} />  {/* Use Route component for each route */}
        <Route path="/login" element={<Login />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/post" element={<PostProcessing />} />
        <Route path="/simulation" element={<SimulationRuns />} />
        <Route path="/forceresults" element={<ForceResult />} />
        <Route path="/result" element={<Result />} />
=======
        <Route path = "/" element = <Dashboard/> />
        <Route path = "/login" element = <Login/> />
        <Route path = "/fileupload" element = <FileUpload /> />
        <Route path = "/post" element = <PostProcessing/> />
        <Route path = "/simulation" element = <SimulationRuns/> />
        <Route path = "/forceresults" element = <ForceResult/> />
        <Route path = "/result" element = <Result/> />
        <Route path = "/simulation/run" element = <Run/> />
        <Route path = "/login/newaccount" element = <NewAccount/> />
>>>>>>> 1b82cbfdb0a5864b6fc71b3affabb34d34cbfbc6
      </Routes>
    </div>
  );
}

export default App;
