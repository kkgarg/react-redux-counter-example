import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementCount} from '../actions/index';

class Count extends Component {
    constructor(props) {
        super(props);
        this.onIncrementHandler = this.onIncrementHandler.bind(this);
    }


    onIncrementHandler(event) {
        console.log(this.props);
        this.props.incrementCount();
    }


    render() {
        return(
            <div>
                <p>{this.props.count}</p> 
                <button onClick={this.onIncrementHandler}>Increment</button>
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
    return bindActionCreators({incrementCount},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
