import React, { Component } from 'react';
import styled from 'styled-components';


class select extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { value, titel } = this.props;
        return (
            <div>
                <select onChange={this.props.onChange}>
                    <option>{titel}</option>
                    {value.length > 0 && value.map((value, index) => {
                        return <option key={value.id} uniqid={index} defaultValue={value.name}>{value.name} {value.id}</option>
                    })
                    }
                </select>
            </div>
        );
    }
}

export default select;