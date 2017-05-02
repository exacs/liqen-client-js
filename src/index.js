import url from 'url'
import fetch from 'isomorphic-fetch'
import { APIError,
         AuthenticationError,
         ClientError,
         ConnectionError,
         InvalidRequestError,
         ErrorCodes as EC } from './errors'

// Default options related to the API
const DEFAULT_OPTIONS = {
  apiURI: 'https://liqen-core.herokuapp.com'
}

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
      throw new APIError(EC.UNPROCESSABLE_JSON)
    })
}

// Resource "annotations"
function createClient (token, options = DEFAULT_OPTIONS) {
  // Set headers
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  return {
    annotations: {
      index () {
        return fetchJSON(url.resolve(options.apiURI, 'annotations'), 'get', {}, headers)
      }
    }
  }
}

export default createClient
module.exports = createClient
