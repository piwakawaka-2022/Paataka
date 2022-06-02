import request from 'superagent'

const key = process.env.MAPS_KEY

export function mapsApiKey (str) {
    return request
.get(`${key}`)
.then(res => {
    console.log(res.body)
})

} 