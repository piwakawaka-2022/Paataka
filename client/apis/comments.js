import request from 'superagent'

export const getListingComments = async (id) => {
  try {
    const res = await request.get(`/api/v1/comments/${id}`)
    return res.body
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
