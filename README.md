# eslint-config-jnprt

Jest, Node, Prettier, React/Preact (can be disabled) and Typescript

## Usage

```
yarn add -D eslint eslint-config-jnprt
```

```
// .eslintrc.json
{
  "extends": ["jnprt"]
  // for next.js - use jnprt/next
  // for typescript-only - use jnprt/typescript
}
```

## Typescript config

When opting in for typescript linting, ensure that the following is set in your eslint config:

```
"parserOptions": {
  "tsconfigRootDir": "./",
  "project": ["./tsconfig.json", "./packages/**/tsconfig.json"]
},
```

The parserOptions above allows for @typescript-eslint/recommended-requiring-type-checking support.

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

## To consider

### Enable boolean checks

The following rule enables variable naming checks for booleans. A down-side of
enabling it requires elinst to parse with types which can slow down linting. For
more info, visit
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md.
Perhaps this could be an option for CI/CD deployments instead.

```
// Enforce that boolean variables are prefixed with an allowed verb. e.g.
// isRight shouldGo hasRecords canDoIt didExecute willGoSomewhere
{
  selector: "variable",
  types: ["boolean"],
  format: ["camelCase", "PascalCase"],
  prefix: ["is", "should", "has", "can", "did", "will"],
  leadingUnderscore: "allow",
},
```
