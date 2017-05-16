/**
 * Basic Example
 */
import core, { APIError } from '../src/index'

const client = core()

console.log('============ TEST SCRIPT =============')
console.log('We are going to do a test connection')
console.log('Test 1. annotations.show(3)')

client
  .annotations.show(3)
  .then(t => {
    console.log('Test 1. Success.')
    console.log(t)
  })
  .catch(err => {
    console.log('Test 1. Error.')
    console.log(err)
  })
