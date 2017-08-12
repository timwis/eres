const test = require('tape')

const eres = require('./index')

function successful () {
  return Promise.resolve('yay')
}

function erroneous () {
  return Promise.reject(new Error('cry'))
}

test('returns result on success', async function (t) {
  t.plan(1)
  const [err, result] = await eres(successful())
  if (err) t.fail('returned an error')
  else t.equal(result, 'yay', 'returned expected result')
})

test('returns an error on failure', async function (t) {
  t.plan(2)
  const [err, result] = await eres(erroneous())
  t.equal(err.message, 'cry', 'returned expected error')
  t.equal(result, undefined, 'result is undefined')
})
