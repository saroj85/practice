import React from 'react';
import Checkbox from './component/checkbox';
import Slider from './component/slider';
import Color from './component/colorSelecel';
import Form from './component/form';
import Tab from './component/tabs'

function Test() {
    return (
        <div className="App">
            <h1>welcome to react app</h1>
            <Form />
            <Checkbox />
            <Tab />
            <Slider />
            <Color />
        </div>
    );
}

export default Test;
