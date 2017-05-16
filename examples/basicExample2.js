/**
 * Basic Example 2.
 *
 * We are going to retrieve an Annotation and the Article refered in that
 */
import core, { APIError } from '../src/index'

const client = core()

client
  .annotations.show(1)
  .then(annotation => {
    console.log('============ FETCH annotation.show() =============')
    console.log(annotation)

    // Now we want the article
    console.log('')
    return client.articles.show(annotation.article_id)
  })
  .then(article => {
    console.log('============ FETCH article.show() =============')
    console.log(article)
  })
  .catch(err => {
    console.log('Test 1. Error.')
    console.log(err)
  })
