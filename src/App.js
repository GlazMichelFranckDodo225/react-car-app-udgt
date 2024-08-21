import { Component } from 'react';
import './App.css';
import MyCar from './components/MyCar';

class App extends Component {
  render() {
    return(
      <div className = "App" >
        <MyCar />
      </div>
    );
  }
}

export default App;
