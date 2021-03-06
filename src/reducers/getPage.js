/**
 * Created by Oksana Sushinskaya on 5/30/2017.
 */
const initialState = {
  list:[],
  headers:[],
  errors:[]
};

export default function getPage(state = initialState, action){
  switch (action.type){
    case 'SAVE_PAGE_USERS':
      return{
        ...state, list: action.payload, headers: action.headers
      };
    case 'SAVE_ERRORS':
      return{
        ...state, errors:action.payload
      };
    default:
      return state;
  }
}