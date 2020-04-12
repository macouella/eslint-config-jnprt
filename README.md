# eslint-config-jnprt

Jest, Node, Prettier, React and Typescript

## Usage

```
yarn add -D eslint eslint-config-jnprt
```

```
// .eslintrc.json
{
  "extends": ["jnprt"]
  // for next.js - use jnprt/next
}
```

## Build your own

```
const jnprtConfig = require('jnprt').default;
module.exports = {
  ...jnprtConfig(),
  // your overrides
}
```
