/**
 * Created by Oksana Sushinskaya on 5/24/2017.
 */
import axios from 'axios'
export default store => next => action => {
    const { callAPI } = action;
    //console.log( callAPI,ID );
    if (!callAPI) {return next(action)}
        axios.get(callAPI)
            .then((response)=>{
              console.log(response.headers);
                next({
                    type: 'SAVE_USERS',
                    payload: response.data
                })
            })
            .catch((error)=>{
                next({
                    type: 'SAVE_ERRORS',
                    payload: error.data
                })
            });

}