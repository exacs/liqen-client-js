/**
 * Collection Example
 *
 * In this example we are going to perform a request to the server
 * We will retrieve a list of annotations given a search param
 */
import core, { APIError } from '../src/index'

const client = core()

client
  .annotations.index({article_id: 3})
  .then(annotations => {
    // annotations is an array of annotations
    // Let's show it
    console.log('============ FETCH annotations.index() =============')
    console.log('We have an array of annotation objects (a summary of them)')
    annotations.forEach(annotation => {
      console.log(annotation)
    })
  })
  .catch(e => {
    console.log(e)
  })
