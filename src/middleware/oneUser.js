/**
 * Created by Oksana Sushinskaya on 5/29/2017.
 */
import axios from 'axios'

export default store => next => action => {
    const { callOneUser } = action;
    if (!callOneUser) {return next(action)}
    axios.get(callOneUser )
        .then((response)=>{
            next({
                type: 'SAVE_ONE_USER',
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