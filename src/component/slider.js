import React, { Component } from 'react';
import Styled from 'styled-components';
import { template } from '@babel/core';

const Wapper = Styled.div`
    width:500px;
    height:300px;
    margin:auto;
    border:1px solid #ccc;
    display:flex;
    overflow-X:hidden;
    flex-wrap:nowrap;

`;
const Items = Styled.div`
    height:100%;
    width:100%;
    background-color:red;
    color:#fff;
    // display:flex;
    // align-tems:center;
    // justify-content:center;
    flex:0 0 auto;
    transform:translate(${props => props.slideindex}00%);
`

    ;

class slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: [
                { id: 1, name: 'apple' },
                { id: 2, name: 'banana' },
                { id: 3, name: 'kiwi' },
                { id: 4, name: 'melon' },
                { id: 5, name: 'orange' },
                { id: 6, name: 'peach' },
                { id: 7, name: 'papaya' }
            ],
            index: 0,
        }
    }
    nextSlide = () => {
        this.setState(prevState =>{
            let {slide, index} = prevState;
            let len = slide.length;
            console.log("len", len)
            if(index < len){
                index = index + 1
            }
            else{
                console.log("false");
            }

        })
    }
    render() {
        const { slide } = this.state;
        return (
            <div style={{width:'500px',margin:'auto'}}>
                <button onClick={this.prevSlide}>Prev</button>
                <button onClick={this.nextSlide}>Next</button>
                <Wapper>
                    {
                        slide && slider.length > 0 && slide.map((item, index) => {
                            return (
                                <Items slideindex={this.state.index} key={item.id}>{item.name}</Items>
                            )
                        })
                    }

                </Wapper>
            </div>
        );
    }
}

export default slider;