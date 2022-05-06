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

export function getOneListing(id) {
  return request.get(`/api/v1/listing/${id}`).then((resp) => resp.body)
}

export function deleteListing(id) {
  return request.delete(`/api/v1/listing${id}`.then((resp) => resp.body))
}

export function updateListing(id) {
  return request.patch(`/api/v1/listing${id}`.then((resp) => resp.body))
}
