import React, { Component } from 'react';
import Input from './share/input';
import Select from './share/select';


let selectvalue = "12";



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
            error:{},
            
            city: [
                {id: 1, name:"delhi", isSelect : false },
                {id: 2, name:"patna" ,isSelect : false},
                {id: 3, name:"noida", isSelect : false},
                {id: 4, name:"supaul" , isSelect : false},
                {id: 5, name:"nirmali" , isSelect : false},
                {id: 6, name:"pujab", isSelect : false},
            ]
        }
    }




    selectChange = event =>{
        let name = event.target.value;
        let indexitem = event.target.uniqid;
        console.log(name)
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
        const {city} = this.state;
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

                <Select 
                    titel="Select City"
                    value={city}
                    onChange={this.selectChange}
                    // isSelect={city.isSelect}
                
                />

            </div>
        );
    }
}

export default form;