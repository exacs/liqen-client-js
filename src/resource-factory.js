import url, { URL, URLSearchParams } from 'url'
import { APIError,
         AuthenticationError,
         ClientError,
         ConnectionError,
         InvalidRequestError,
         ErrorCodes as EC } from './errors'
import fetch from 'isomorphic-fetch'

// Performs the API call
function fetchJSON (endpoint, method, body, headers) {
  return fetch(endpoint, { method, headers, body: JSON.stringify(body) })
    .catch(() => { throw new ConnectionError() })
    .then(parseJSON)
    .then(checkResponseErrors)
    .then(response => response.json)
}

// Throws some errors depending on the response
function checkResponseErrors (response) {
  const body = response.json

  switch (response.status) {
    case 401:
    case 403:
      throw new AuthenticationError({
        status: response.status,
        message: body && body.message
      })
    case 422:
      throw new InvalidRequestError({
        message: body && body.message,
        errors: body && body.errors
      })
    case 404:
      throw new ClientError({
        status: response.status,
        message: body && body.message
      })
    default:
      return response
  }
}

// Parses the JSON
function parseJSON (response) {
  return response
    .json()
    .then(json => Object.assign(response, {json}))
    .catch(() => {
      throw new APIError({
        code: EC.UNPROCESSABLE_JSON
      })
    })
}

const resourceFactory = (apiURI, headers) => name => ({
  index (params) {
    const endpoint = new URL(name, apiURI)
    endpoint.search = new URLSearchParams(params)
    return fetchJSON(endpoint.href, 'get', {}, headers)
  },

  show (id) {
    return fetchJSON(url.resolve(apiURI, name + '/' + id), 'get', {}, headers)
  },

  create (params) {
    return fetchJSON(url.resolve(apiURI, name), 'post', params, headers)
  },

  update (id, params) {
    return fetchJSON(url.resolve(apiURI, name + '/' + id), 'patch', params, headers)
  },

  delete (id) {
    return fetchJSON(url.resolve(apiURI, name + '/' + id), 'delete', {}, headers)
  }
})

export default resourceFactory
