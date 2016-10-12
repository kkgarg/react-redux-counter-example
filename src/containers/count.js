import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementCount, decrementCount} from '../actions/index';

class Count extends Component {
    constructor(props) {
        super(props);
        this.onIncrementHandler = this.onIncrementHandler.bind(this);
        this.onDecrementHandler = this.onDecrementHandler.bind(this);
    }


    onIncrementHandler(event) {
        this.props.incrementCount();
    }

    onDecrementHandler(event) {
        this.props.decrementCount();
    }

    render() {
        return(
            <div>
                <p>{this.props.count}</p> 
                <button onClick={this.onIncrementHandler}>Increment</button>
                <button onClick={this.onDecrementHandler}>Decrement</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({incrementCount, decrementCount},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
