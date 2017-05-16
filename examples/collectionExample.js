/**
 * Collection Example
 *
 * In this example we are going to perform several requests to the server.
 * 1. We will retrieve a list of articles (a summary of them)
 * 2. We will retrieve the information of each Article (the full article object)
 */
import core, { APIError } from '../src/index'

const client = core()

client
  .articles.index()
  .then(articles => {
    // articles is an array of "article" objects.
    // Let's show it
    console.log('============ FETCH articles.index() =============')
    console.log('We have an array of article objects (a summary of them)')
    articles.forEach(article => {
      console.log(article)
    })
    // Let's transform it into an array of Promises
    const promises = articles.map(
      article => client.articles.show(article.id)
    )

    // Now, transform the array of promises into a Promise of array
    console.log('')
    return Promise.all(promises)
  })
  .then(articles => {
    // Annotations is an array
    console.log('============ FETCH articles.show() several times =============')
    console.log('We have an array of article objects (full objects)')
    articles.forEach(article => {
      console.log(article)
    })
  })
  .catch(err => {
    console.log('Error.')
    console.log(err)
  })
