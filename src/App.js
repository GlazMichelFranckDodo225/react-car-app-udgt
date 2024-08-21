import { Component } from 'react';
import './App.css';
import MyCar from './components/MyCar';

class App extends Component {
  state = {
    title: "Car Catalog"
  };

  render() {
    return (
      <div className="App" >
        <MyCar title={this.state.title}/>
      </div>
    );
  }
}

export default App;
