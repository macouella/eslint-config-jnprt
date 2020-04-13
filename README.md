# eslint-config-jnprt

Jest, Node, Prettier, React/Preact and Typescript

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

## Useful package.json scripts

```
{
  ...
  "scripts": {
    "lint": "eslint . --ext js,jsx,ts,tsx"
  }
}
```
