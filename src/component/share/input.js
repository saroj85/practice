import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width:200px;
    height:40px;
    margin:0px;
    font-size:15px;
    color:#222;
    border:1px solid #ccc;
`

class input extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <p>{this.props.labelTxt}</p>
                <Input {...this.props} style={{borderColor: this.props.errorStyle ? "red" : "#ccc"}}/>
                {/* <p style={this.props.errorStyle}>{this.props.error}</p> */}
            </div>
        );
    }
}

export default input;