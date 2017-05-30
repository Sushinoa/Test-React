
export function getUsers(Params,id) {

    return {
        type: 'GET_USERS',
        callAPI: Params,
        ID: id
    }
}