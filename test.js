import core, { APIError } from './dist/liqen-api-client'

console.log(core)
console.log(APIError)
console.log('hello')
console.log('We are going to do a test connection')
console.log('lets go')

const client = core()

client
  .annotations.show(3)
  .then(t => {
    console.log(t)
  })
  .catch(err => {
    console.log('error')
    console.log(err)
  })

client
  .users.show(1)
  .catch(err => {
    console.log('error')
    console.log(err)
  })
