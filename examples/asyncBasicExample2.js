/**
 * Basic Example 2.
 *
 * We are going to retrieve an Annotation and the Article refered in that
 */
import core, { APIError } from '../src/index'

const client = core()

async function test () {
  const annotation = await client.annotations.show(1)
  console.log('============ FETCH annotation.show() =============')
  console.log(annotation)

  const article = await client.articles.show(annotation.article_id)
  console.log('============ FETCH article.show() =============')
  console.log(article)
}

test()
  .catch(err => {
    console.log('Test 1. Error.')
    console.log(err)
  })
