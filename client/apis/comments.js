import request from 'superagent'

export const getAllComments = async () => {
  try {
    const res = await request.get('/api/v1/comments')
    console.log(res.body)
  } catch (err) {
    console.error(err)
  }
}

export const getListingComments = async (id) => {
  try {
    const res = await request.get(`/api/v1/comments/${id}`)
    console.log(res.body)
  } catch (err) {
    console.error(err)
  }
}

export function addComment (newEvent) {
  return request
    .post('/api/v1/listing')
    .send(newEvent)
    .then((resp) => resp.body)
}

// EDIT COMMENT

// DELETE COMMENT

// export function addListing(newEvent) {
//   return request
//     .post('/api/v1/listing')
//     .send(newEvent)
//     .then((resp) => resp.body)
// }

// export function deleteListing(id) {
//   return request.delete(`/api/v1/listing${id}`.then((resp) => resp.body))
// }

// export function updateListing(id) {
//   return request.patch(`/api/v1/listing${id}`.then((resp) => resp.body))
// }
