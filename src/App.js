import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is Alert" />
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/home' element={<Home />} />


          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
