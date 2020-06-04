import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        }
    }

    render() {
        return(
            <div align="center" className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count" >{this.state.counter}</span><br/>
                <button id="reset" onClick={this.reset}>Reset</button>
            </div>
        );
    }

    increment = (by) => {
        this.setState((prevState)=> { 
            return {counter : prevState.counter + by}
        });
    }

    decrement = (by) => {
        this.setState((prevState)=> { 
            return {counter : prevState.counter - by}
        });
    }

    reset = () => {
        this.setState({
            counter : 0
        });
    }
}

class CounterButton extends Component {

    render() {
        return (
            <div className="counterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button> 
            </div>
        );
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}



export default Counter;