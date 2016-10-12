import {INCREMENT_COUNT, DECREMENT_COUNT} from '../actions/index'

export default function (state=0, action) {
    switch(action.type) {
        case INCREMENT_COUNT:
            return state+1;
        case DECREMENT_COUNT:
            return state-1;
    }
    return state
}

