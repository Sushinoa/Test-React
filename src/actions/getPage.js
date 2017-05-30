/**
 * Created by Oksana Sushinskaya on 5/30/2017.
 */

export function getPage(Params,id) {

  return {
    type: 'GET_PAGE',
    callPageUser: Params,
    ID: id
  }
}
