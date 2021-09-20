import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import { ExpGreet } from './components/ExportGreet';

function App() {
  return (
    <div className="App">
      <Greet/>
      <ExpGreet/>
    </div>
  );
}

export default App;
