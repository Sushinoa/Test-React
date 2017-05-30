
const initialState = {
    list:[]
};

export default function getUsers(state = initialState, action){
    switch (action.type){
        case 'SAVE_USERS':
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