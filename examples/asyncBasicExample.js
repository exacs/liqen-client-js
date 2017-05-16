/**
 * Basic Example
 */
import core, { APIError } from '../src/index'

const client = core()

console.log('============ TEST SCRIPT =============')

async function test () {
  const t = await client.annotations.show(3)
  console.log('Test 1. Success.')
  console.log(t)
}

test()
  .catch(err => {
    console.log('Test 1. Error.')
    console.log(err)
  })
