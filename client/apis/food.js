import request from 'superagent'

export function getAllListings() {
  return request.get('/api/v1/listings').then((resp) => resp.body)
}

export function addListing(newEvent) {
  return request
    .post('/api/v1/listing')
    .send(newEvent)
    .then((resp) => resp.body)
}

export function getAlisting() {
  return request.get('/api/v1/listing').then((resp) => resp.body)
}
