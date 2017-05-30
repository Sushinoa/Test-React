/**
 * Created by Oksana Sushinskaya on 5/29/2017.
 */

export function getOneUser(Params,id) {

    return {
        type: 'GET_ONE_USER',
        callOneUser: Params,
        ID: id
    }
}
