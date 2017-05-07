import resourceFactory from './resource-factory'

// Default options related to the API
const DEFAULT_OPTIONS = {
  apiURI: 'https://liqen-core.herokuapp.com'
}

function createClient (token, options = DEFAULT_OPTIONS) {
  // Set headers
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const r = resourceFactory(options.apiURI, headers)

  return {
    annotations: r('annotations'),
    articles: r('articles'),
    users: r('users'),
    sessions: r('sessions')
  }
}

export default createClient
export * from './errors'
