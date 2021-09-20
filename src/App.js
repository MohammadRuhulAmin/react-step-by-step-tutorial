import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import { ExpGreet } from './components/ExportGreet';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Greet/>
      <ExpGreet/>
      <Welcome/>
    </div>
  );
}



export default App;
