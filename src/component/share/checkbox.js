import React, { Component } from 'react';
import styled from 'styled-components';

const CheckboxLabel = styled.div`
.checkbox_container{
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
  }
  .checkbox_container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border:1px solid #ccc;
  }
  
  .checkbox_container input:checked ~ .checkmark {
    background-image: linear-gradient(to bottom, #00bd76, #00b06e)
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .checkbox_container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .checkbox_container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

`;


class checkbox extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <CheckboxLabel>
                <label className="checkbox_container">
                    {this.props.label}
                    <input {...this.props} />
                    <span className="checkmark"></span>
                </label>
            </CheckboxLabel>
        );
    }
}

export default checkbox;