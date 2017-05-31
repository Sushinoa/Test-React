
export function saveUsers(List, Headers) {

    return {
        type: 'SAVE_USERS',
        payload: List,
        headers:Headers
    }
}