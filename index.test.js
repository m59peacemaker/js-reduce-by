var test = require('tape')
var reduceBy = require('./')

test('reduceBy', function (t) {
  t.deepEqual(
    reduceBy(
      function (group, v) { return group + v },
      function () { return '' },
      function (v) { return v.slice(0, 1) },
      [ 'foo', 'bar', 'baz' ]
    ),
    { f: 'foo', b: 'barbaz' }
  )

  t.deepEqual(
    reduceBy(
      function (group, v) {
        group.push(v)
        return group
      },
      function () { return [] },
      function (v) { return v.name },
      [
        { name: 'apple', color: 'red' },
        { name: 'apple', color: 'green' },
        { name: 'orange', color: 'lol' }
      ]
    ),
    {
      apple: [
        { name: 'apple', color: 'red' },
        { name: 'apple', color: 'green' },
      ],
      orange: [
        { name: 'orange', color: 'lol' }
      ]
    }
  )

  t.end()
})
