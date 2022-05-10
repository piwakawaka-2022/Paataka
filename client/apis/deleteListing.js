/* eslint-disable space-before-function-paren */
import request from 'superagent'

export function deleteListing(listing) {
  return request
    .post('/api/v1/listings/delete')
    .send(listing)
    .then((res) => res.body)
}
