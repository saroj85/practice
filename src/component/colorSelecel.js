import React, { Component } from 'react';
import Styled from 'styled-components';

const ColorWapper = Styled.div`
    width:500px;
    display:flex;
    margin:auto;
    padding:10px;
    border:1px solid #ccc;
    border-radius:3px;
    flex-wrap:wrap;
    justify-content:center;
    background-color:${props => props.bgColor};
     div{
        width:40px;
        height:40px;
        border:1px solid #ccc;
        border-radius:50%;
        cursor:pointer;
        margin:3px;
        position:relative;
     }
`;

class colorSelecel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['#990000', '#997300', 'red', 'green', 'black', 'pink', '#fff', 'royalblue', '#014666', '#666699', '#333333', '#ffcc00', '#0099ff', '#008080', '#ff00ff', '#808000', 'orange'],
            selectColor: null,
        }
    }
    render() {
        return (
            <div>
                <ColorWapper bgColor={this.state.selectColor}>
                    {
                        this.state.color && this.state.color.length > 0 && this.state.color.map((color, index) => {
                            return (<div
                                    key={index}
                                style={{ background: color }}
                                onClick={(event) => {
                                    this.setState({
                                        selectColor: event.target.style.backgroundColor,
                                    })
                                    // console.log(event.target.style.backgroundColor);
                                }}
                            >
                            </div>)
                        })
                    }
                </ColorWapper>
            </div>
        );
    }
}

export default colorSelecel;