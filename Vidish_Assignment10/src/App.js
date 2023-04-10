import React from 'react';
import './App.css';
import Weather from '../src/components/Weather';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Weather history={this.props.history} />
      </div>
    );
  }
}

export default App;
