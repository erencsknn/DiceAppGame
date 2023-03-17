import './App.css';
import {Route} from 'react-router-dom';
import Dicer from './components/Dicer';

function App() {
  return (
    
    <div className='App'>
    <center>
    <h1>
    Welcome to dice game
    </h1>
    <Dicer></Dicer>
    </center>
    </div>
  );
}

export default App;
