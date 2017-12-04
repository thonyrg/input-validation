import React, { Component } from 'react';
import InputText from './components/InputText/InputText';

class App extends Component {
  render() {
    return (
      <div>
        <InputText expression="^.{6,}$" />
      </div>
    );
  }
}

export default App;
