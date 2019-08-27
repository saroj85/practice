import React, { Component } from 'react';
import Checkbox from './share/checkbox';
import { all } from 'q';

let objectChecked = [];

class checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                { id: 1, value: 'apple', isChecked: false },
                { id: 2, value: 'banana', isChecked: false },
                { id: 3, value: 'mango', isChecked: false },
                { id: 4, value: 'papaya', isChecked: false },
                { id: 5, value: 'kiwi', isChecked: false },
                { id: 6, value: 'pineapple', isChecked: false },
                { id: 7, value: 'strawberry', isChecked: false },
                { id: 8, value: 'vhgv', isChecked: false },
                { id: 9, value: 'orange', isChecked: false },
                { id: 10, value: 'peach', isChecked: false },
                { id: 11, value: 'melon', isChecked: false }
            ],
            allChecked: false,
        }
    }


    handleAllChecked = (event) => {
        const itemName = event.target.value;
        const isCheckedItem = event.target.checked;
        const itemId = event.target.id;

        this.setState(prevState => {
            let { fruits, allChecked } = prevState;

            if (itemName == "selectAll") {
                allChecked = isCheckedItem;
                if (allChecked === true) {
                    objectChecked = [];
                    fruits = fruits.map((item) => ({ ...item, isChecked: true }))
                    fruits.map((item, index) => {
                        objectChecked.push({"id" : item.id})
                    })
                }
                else{
                    fruits = fruits.map((item) => ({ ...item, isChecked: false }))
                    objectChecked = [];
                }
            }

            else {
                fruits.map((item, index) => {
                    if (item.id === parseInt(itemId)) {
                        item.isChecked = isCheckedItem;
                        if (item.isChecked === true) {
                            objectChecked.push({"id" : item.id});
                        }
                        else {
                            objectChecked = objectChecked.filter(item =>{
                                return item.id != itemId;
                            })
                        }
                    }
                })

                if(objectChecked.length != fruits.length) allChecked = false;
                else allChecked = true; 
            }
            console.log(this.state)
            


            return { fruits, allChecked }
        })



    }




    render() {

        return (
            <div>
                <div>
                    <h2>select items {objectChecked.length} && select All <span style={{ fontSize: '12px', }}>{this.state.allChecked ? "True" : "False"}</span></h2>
                </div>
                <Checkbox type="checkbox" defaultValue="selectAll" label="Select All" checked={this.state.allChecked} onChange={this.handleAllChecked} />
                {this.state.fruits && this.state.fruits.length > 0 && this.state.fruits.map((fruits, index) => {
                    return (
                        <div key={index}>
                            <Checkbox
                                // key={fruits.id}
                                type="checkbox"

                                id={fruits.id}
                                label={fruits.value}
                                defaultValue={fruits.value}
                                checked={fruits.isChecked}
                                onChange={this.handleAllChecked}
                            />
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default checkbox;