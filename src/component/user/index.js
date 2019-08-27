import React, { Component } from 'react';
import {UserConsumer} from '../user';

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : 'https://jsonplaceholder.typicode.com/users',
            user :[],
        }
    }

    componentDidMount=() => {

        fetch(this.state.url)
        .then(result =>{
            // result.
            console.log(result.json());
        })

    }

    render() {
        return (
            <UserConsumer>
            {props => {
              return <div>{props.name}<br></br>
                {props.loggedIn ? "Hey" : "notHey"}</div>

            }}
          </UserConsumer>
        );
    }
}

export default User;