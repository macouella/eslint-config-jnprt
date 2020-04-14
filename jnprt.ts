import { Linter } from "eslint"

type FRAMEWORK_KEYS = "next"

const FRAMEWORK_OVERRIDES: Partial<Record<
  FRAMEWORK_KEYS,
  Array<Linter.ConfigOverride>
>> = {
  next: [
    {
      files: ["**/pages/**/*.{jsx,tsx}"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
            ignore: ["[A-Z]+.(j|t)sx"],
          },
        ],
      },
    },
  ],
}

const buildExtends = (type: "js" | "ts") => {
  const isJS = type === "js"
  const isTS = type === "ts"
  return [
    isJS && "eslint:recommended",

    "plugin:unicorn/recommended",

    "plugin:import/errors",
    "plugin:import/warnings",
    isTS && "plugin:import/typescript",

    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    isTS && "plugin:@typescript-eslint/eslint-recommended",
    isTS && "plugin:@typescript-eslint/recommended",

    "prettier",
    "prettier/react",
    isTS && "prettier/@typescript-eslint",
  ].filter(Boolean) as string[]
}

const buildRules = () => {
  return {
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        "newlines-between": "never",
      },
    ],
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "warn",
    "unicorn/prevent-abbreviations": "warn",
    "no-useless-escape": "warn",
    "react/react-in-jsx-scope": "off",
    "unicorn/no-abusive-eslint-disable": "warn",
  } as Linter.Config["rules"]
}

const BASE_CONFIG: Linter.Config = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: buildExtends("js"),
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ["**/__tests__/**", "**/*.{test|spec}.{js,ts,tsx,jsx}"],
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: buildExtends("ts"),
      rules: {
        ...buildRules(),
        "@typescript-eslint/camelcase": [
          "warn",
          {
            properties: "never",
          },
        ],
        "@typescript-eslint/interface-name-prefix": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-use-before-define": "warn",

        // see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
        "import/named": "off",
        "import/namespace": "off",
        "import/default": "off",
        "import/no-named-as-default-member": "off",

        // @TODO - run in ci/cd, maybe toggle with an env var
        "import/no-named-as-default": "off",
        "import/no-cycle": "off",
        "import/no-unused-modules": "off",
        "import/no-deprecated": "off",
      },
    },
    {
      files: ["**/*.{jsx,tsx}"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              camelCase: true,
              pascalCase: true,
            },
            ignore: ["[A-Z]+.(j|t)sx"],
          },
        ],
      },
    },
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["unicorn", "react", "react-hooks"],
  root: true,
  rules: buildRules(),
  settings: {
    react: {
      version: "detect",
    },
  },
}

export default function jnprtConfig(framework?: FRAMEWORK_KEYS) {
  const frameworkOverride = framework ? FRAMEWORK_OVERRIDES[framework]! : []
  const config: Linter.Config = {
    ...BASE_CONFIG,
    overrides: [...BASE_CONFIG.overrides!, ...frameworkOverride],
  }
  return config
}
