import React, { Component } from 'react';
import styled from 'styled-components';


const Wapper = styled.div`
    width:300px;
    height:300px;
    bordeR:1px solid #ccc;
    margin:20px auto;
`;
const Tabs = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const TabData = styled.div`
    background-color:${props => props.active ? "red" : "#ccc"};
    color:${props => props.active ? "#fff" : "#222"};
    width:25%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const TabPanel = styled.div`
    width:100%;
    padding:20px;
    box-sizing:border-box;
`;

class tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [
                { Title: 'About' },
                { Title: 'My Payments' },
                { Title: 'My Subscription' },
                { Title: 'My courses' },
            ],
            activeStep: 0
        }
    }
    componentDidMount = () => {
        let newwala = window.navigator.onLine;
        // console.log("hey i am" , newwala)
        if (newwala === true) {
            console.log("online");
        }
        else {
            console.log("offline")
        }

    }

    changeTab = (step) => {
        this.setState(prevState => {
            let { activeStep } = prevState;
            switch (step) {
                case 0:
                    activeStep = 0;
                    break;
                case 1:
                    activeStep = 1;
                    break;
                case 2:
                    activeStep = 2;
                    break;
                case 3:
                    activeStep = 3;
                default:
                    break;
            }
            // activeStep  = 1;
            return { activeStep }

        })
    }

    // changeTab = step => {
    //     let temp = ""
    //     switch (step) {
    //         case 0:
    //             temp = 0
    //             break;
    //         case 1:
    //             temp = 1
    //             break;
    //         case 2:
    //             temp = 2
    //             break;
    //         case 3:
    //             temp = 3
    //             break;
    //         default:
    //             break;
    //     }

    //     this.setState({
    //         activeStep: temp
    //     })
    // }


    // componentDidMount = () => {
    //     setInterval(function() {
    //         this.changeTab();
    //     }, 3000);
    // }



    render() {
        let { tab, activeStep } = this.state;
        return (
            <Wapper>
                <Tabs>
                    {
                        tab.length > 0 && tab.map((item, index) => {
                            return (
                                <TabData className="tab" active={activeStep === index} key={index} onClick={() => this.changeTab(index)}>{item.Title}</TabData>
                            )
                        })}
                </Tabs>
                {activeStep == 0 &&
                    <TabPanel>
                        <h1>Home</h1>

                    </TabPanel>
                }

                {activeStep == 1 &&
                    <TabPanel>
                        <h1>about</h1>

                    </TabPanel>
                }


                {activeStep == 2 &&
                    <TabPanel>
                        <h1>constact Us</h1>

                    </TabPanel>
                }


                {activeStep == 3 &&
                    <TabPanel>
                        <h1>Privacy</h1>

                    </TabPanel>
                }


            </Wapper>
        );
    }
}

export default tabs;