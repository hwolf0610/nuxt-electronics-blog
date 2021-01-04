import axios from 'axios'
export default (sendData, ctx) => {

  return axios({
    method: sendData.method,
    url: process.env.base_url + sendData.url,
    data: sendData.data
  })
    .then(response => {

      ctx(response)

    })
    .catch((error) => {
      console.log('error: ', error);
      ctx(null)
    })
}