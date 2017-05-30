import axios from 'axios'

export default store => next => action => {
    const { callPost,data } = action;
    if (! callPost) {return next(action)}
    console.log(data)
    axios.post(callPost,data)

        .then((response)=>{
            console.log(response.data);
            next({
                type: 'SAVE_NEW_USER',
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