import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import { ExpGreet } from './components/ExportGreet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet/>
      <ExpGreet/>
      <Welcome/>
      <Hello/>
    </div>
  );
}






export default App;
