import React, { Component } from 'react';
import Input from './share/input';


class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldObj: {
                Name: "",
                Email: "",
                Address: '',
                Zip: '',
                Message: ''
            
            },
            error:{}
        }
    }


    handlerChange = key => event => error => {
        // let error = event.target.error;
        let val = event.target.value;
        const temp = Object.assign({}, this.state.fieldObj);

        temp[key] = event.target.value;

        this.setState({
            ...temp
        }, () => {
            // if(this.state.fieldObj.Name.length < 3) return alert("df")
            // if(this.state.fieldObj.Email.length < 4) return alert("dfdddd")
            // if(this.state.fieldObj.Sddress = "") return alert("df")
            // if(this.state.fieldObj.name = "") return alert("df")
            // if(this.state.fieldObj.name = "") return alert("df")
        })
        


    }

    render() {
        const { Name, Email, Address, Zip, Message } = this.state.fieldObj;
        return (
            <div>
                <Input
                    type="text"
                    labelTxt="Name"
                    error="Pls fill form"
                    errorStyle={this.state.errorStyle}
                    onChange={this.handlerChange('Name')}
                    placholder="Your Name" 
                    defaultValue={Name}
                />
                <Input
                    type="text"
                    labelTxt="Email"
                    error="Pls fill form"
                    errorStyle={this.state.errorStyle}
                    onChange={this.handlerChange('Email')}
                    placholder="Your Name"
                    defaultValue={Email}
                />

            </div>
        );
    }
}

export default form;