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
        "@typescript-eslint/camelcase": [
          "warn",
          {
            properties: "never",
          },
        ],
        "@typescript-eslint/interface-name-prefix": "warn",
        "@typescript-eslint/no-var-requires": "warn",
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
  rules: {
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
    "no-useless-escape": "warn",
    "react/react-in-jsx-scope": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          args: false,
          cmd: false,
          conf: false,
          ctx: false,
          e: false,
          env: false,
          num: false,
          props: false,
          req: false,
          res: false,
        },
      },
    ],
  },
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
