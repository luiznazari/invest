const url = process.env.NODE_ENV === 'production'
  ? 'https://l1i8gyk48c.execute-api.us-east-1.amazonaws.com'
  : 'http://localhost:8080'

export default {
  url,
  path: {
    prefix: 'Prod',
    storage: 'storage',
    upload: 'files/file-upload',
  },
}
