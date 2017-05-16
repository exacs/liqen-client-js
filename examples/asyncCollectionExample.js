/**
 * Collection Example
 *
 * In this example we are going to perform several requests to the server.
 * 1. We will retrieve a list of articles (a summary of them)
 * 2. We will retrieve the information of each Article (the full article object)
 */
import core, { APIError } from '../src/index'

const client = core()

async function test () {
  // articles is an array of "article" objects.
  const articles = await client.articles.index()
  console.log('============ FETCH articles.index() =============')
  console.log('We have an array of article objects (a summary of them)')
  articles.forEach(article => {
    console.log(article)
  })

  // Let's transform it into an array of Promises
  const promises = articles.map(
    article => client.articles.show(article.id)
  )

  const articles2 = await Promise.all(promises)
  console.log('============ FETCH articles.show() several times =============')
  console.log('We have an array of article objects (full objects)')

  articles.forEach(article => {
    console.log(article)
  })
}

test()
  .catch(err => {
    console.log('Error.')
    console.log(err)
  })
