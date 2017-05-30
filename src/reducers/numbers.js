/**
 * Created by Oksana Sushinskaya on 5/23/2017.
 */

const initialState = 0;

export default function sumNumber(state = initialState, action){
    switch (action.type){
        case 'ADD_NUMBER':
            return parseInt(state, 10) + parseInt(action.payload, 10);
        default:
            return state;
    }
}