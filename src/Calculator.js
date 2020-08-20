import React from 'react';

class Calculator extends React.Component {

    constructor() {
        super()

        this.state = {
            firstOperand: 0,
            operator: '',
            secondOperand: 0,
            result: '',
        }
        //"this" only exists for the event handlers if we include lines like this for each
        // event handlers
        // this.onFirstOperandChange = this.onFirstOperandChange.bind(this)
        //this.calculate = this.calculate.bind(this)
    }
    /**
    event target is the element that had the event
    - in this case the firstOperand input had a "change" event
     */
    onFirstOperandChange = (event) => {
        const newValue = event.target.value;
        this.setState({
            firstOperand: newValue
        })
    }

    onSecondOperandChange = (event) => {
        const secondOperand = event.target.value;
        this.setState({
            secondOperand
        });
    }


    onOperatorChange = (event) => {
        const operator = event.target.value;
        this.setState({
            operator
        })
    }
    // use older non-experimental syntax for this click handler
    calculate = (event) => {
        let result = 0;
        const { firstOperand, secondOperand, operator } = this.state;

        switch (operator) {
            case '+':
                result = parseInt(firstOperand) + parseInt(secondOperand);
                break;
            case '-':
                result = parseInt(firstOperand) - parseInt(secondOperand);
                break;
            case '*':
                result = parseInt(firstOperand) * parseInt(secondOperand);
                break;
            case '/':
                result = parseInt(firstOperand) / parseInt(secondOperand);
                break;
        }
        this.setState({
            result
        })
    }

    render() {
        return (
            <div>
                {/* first operand */}
                <input type="number" onChange={this.onFirstOperandChange} />

                <select onChange={this.onOperatorChange}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>

                </select>

                {/* second operand */}
                <input type="number" onChange={this.onSecondOperandChange} />

                <button onClick={this.calculate}>=</button>

                <input value={this.state.result} type="text" disabled />
            </div>
        )
    }
}

export default Calculator;