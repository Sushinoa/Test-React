/**
 * Created by Oksana Sushinskaya on 5/29/2017.
 */

const initialState = {
    list:[],
    errors:[]
};

export default function getOneUser(state = initialState, action){
    switch (action.type){
        case 'SAVE_ONE_USER':
            return{
                ...state, list: action.payload
            };
        case 'SAVE_ERRORS':
            return{
                ...state, errors:action.payload
            };
        default:
            return state;
    }
}