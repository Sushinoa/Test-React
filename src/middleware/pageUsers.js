/**
 * Created by Oksana Sushinskaya on 5/30/2017.
 */
import axios from 'axios'

export default store => next => action => {
  const { callPageUser } = action;
  if (!callPageUser) {return next(action)}
  axios.get(callPageUser )
  .then((response)=>{
    next({
      type: 'SAVE_PAGE_USERS',
      payload: response.data,
      headers:response.headers
    })
  })
  .catch((error)=>{
    next({
      type: 'SAVE_ERRORS',
      payload: error.data
    })
  });
}