import request from 'superagent'

export const getListingComments = async (id) => {
  try {
    const res = await request
      .get(`/api/v1/comments/${id}`)
    return res.body
  } catch (err) {
    console.error(err)
  }
}

export const addComment = async (newComment) => {
  try {
    const res = await request
      .post('/api/v1/comments')
      .send(newComment)
  } catch (err) {
    console.error(err)
  }
}
