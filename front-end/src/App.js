
import './App.css';
import MusicInsts from './components/MusicInsts';
import MusicInstEdit from './components/MusicInstEdit';
import MusicInstView from './components/MusicInstView';
import MusicInstAdd from './components/MusicInstAdd';
import {
  Routes,
  Route

} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* all your routes should be implemented here */}
      <Routes>
        <Route path='/' element={<MusicInsts />} />
        <Route path='/editMusicInst' element={<MusicInstEdit />} />
        <Route path='/viewMusicInst' element={<MusicInstView />} />
        <Route path='/addMusicInst' element={<MusicInstAdd />} />
      </Routes>
    </div>
  );
}

export default App;
