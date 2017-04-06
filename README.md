# reduce-by

Turn an array of values into an object by using a function to determine the key an item belongs to and a function to determine how an item is grouped under that key. `reduceBy` is like `groupBy`, but more generic.

## install

```sh
$ npm install reduce-by
```

## example

```js
const reduceBy = require('reduce-by')

// group items by concatenating and use first character as the key
reduceBy(
  (group, v) => group + v,
  () => '',
  v => v.slice(0, 1),
  [ 'foo', 'bar', 'baz' ]
)
// => { f: 'foo', b: 'barbaz' }
```

## api

### `reduceBy(groupReducer, getInitialGroupValue, getKey, array)`

- `groupReducer(group, value)` function that takes the accumulated group value and a value to be grouped and returns the new accumulated group value
  - `group` accumulated group value
  - `value` value to be added to the group
  - `=> group` accumulated group value
- `getInitialGroupValue()` function that returns the initial value for groups
  - `=> initialGroupValue`
- `getKey(value)` function that takes `value` and returns the key that `value` belongs to
  - `=> key` the key the value should be grouped under
- `array: []` an array of items to be turned into an object
- `=> object`
