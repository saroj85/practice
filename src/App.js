import React from 'react';
import Checkbox from './component/checkbox';
import Slider from './component/slider';
import Color  from './component/colorSelecel';
import Form from './component/form';
import Tab from './component/tabs'

function App() {


  return (
    <div className="App">
    <h1>welcome to react app</h1>

    <Form/>

    
    <br></br>
      <Checkbox />
      <br>

     
      
      </br> <Tab/>
      <Slider/>
      <br></br>
      <Color />


    </div>
  );
}

export default App;
