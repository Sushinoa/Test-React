/**
 * Created by Oksana Sushinskaya on 5/30/2017.
 */
export function savePageUsers(List, Headers) {

  return {
    type: 'SAVE_PAGE_USERS',
    payload: List,
    headers:Headers
  }
}