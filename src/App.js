import React, { Component } from 'react';
import InputText from './components/InputText/InputText';
import VinSearch from './components/VinSearch/VinSearch';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="componentRow">
          <InputText expression="^.{6,}$" />
        </div>
        <div className="componentRow">
          <VinSearch />
        </div>
      </div>
    );
  }
}

export default App;
