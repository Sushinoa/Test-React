/**
 * Created by Oksana Sushinskaya on 5/26/2017.
 */
export function postUser(params,data) {
    console.log(data)
    return {

        type: 'POST_USER',
        callPost: params,
        data: data
    }
}