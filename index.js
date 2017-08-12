module.exports = function (promise) {
  return promise
    .then((result) => [null, result])
    .catch((err) => [err])
}
