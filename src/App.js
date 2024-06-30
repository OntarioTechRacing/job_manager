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
<<<<<<< HEAD
import Profile from './ProfileSettings';
=======
import ProfileSettings from './ProfileSettings';
>>>>>>> 6240b6516f4d237f31d0e67dbedc7654f0caa99f

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/login/newaccount" element = {<NewAccount/> } />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/post" element={<PostProcessing />} />
        <Route path="/simulation" element={<PostProcessing />} />
        <Route path="/forceresults" element={<ForceResult />} />
        <Route path="/result" element={<Result />} />
        <Route path = "/simulation/run" element = {<Run/>} />
<<<<<<< HEAD
        <Route path="/profile" element={<Profile/>}></Route>
=======
        <Route path="/profile-settings" element={<ProfileSettings />} />
>>>>>>> 6240b6516f4d237f31d0e67dbedc7654f0caa99f
      </Routes>
    </div>
  );
}

export default App;
