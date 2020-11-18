function getPropertyValues (array, key) {
  return array.map((el) => el[key])
}

module.exports = function (chai) {
  const Assertion = chai.Assertion
  Assertion.addMethod("arrayProperty", function (key, expected) {
    const actual = getPropertyValues(this._obj, key)
    this.assert(
      JSON.stringify(actual) === JSON.stringify(expected),
      `expected #{this} to contain key '${key}' with values #{exp} but got #{act}`,
      `expected #{this} not to contain '${key}' key with values #{exp}`,
      expected,
      actual,
    )
  })
}
