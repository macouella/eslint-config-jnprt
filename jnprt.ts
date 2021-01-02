import { Linter } from "eslint"

export enum PRESET_TYPES {
  DEFAULT = "default",
  NEXT = "next",
  TYPESCRIPT = "typescript",
}

const ESLINT_PRESET_EXTRA_OVERRIDES: Partial<
  Record<PRESET_TYPES, Array<Linter.ConfigOverride>>
> = {
  [PRESET_TYPES.NEXT]: [
    {
      files: ["**/pages/**/*.{jsx,tsx}"],
      rules: {
        // allows kebab-case files in next.js to respect filename-based routing
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

const ESLINT_REACT_OVERRIDES: Linter.ConfigOverride<Linter.RulesRecord>[] = [
  {
    // JSX-specific rules
    files: ["**/*.{jsx,tsx}"],
    rules: {
      // Replaces the Typescript rules so that we can also allow
      // ComponentPascalNaming
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
      ],
      // Allows the following filenames for JSX/TSX files: camelCase.tsx
      // PascalCase.tsx and ALL_UPPERCASE.tsx
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
]

// Warns about unused variables. Arguments are left alone as it is useful at
// times to leave them in function signatures. Rest siblings are left
// alone too as destructuring can be used to omit object values.
const NO_UNUSED_RULE = ["warn", { args: "none", ignoreRestSiblings: true }]

// ESLint Rules to combine based on a selected preset
const ESLINT_RULES = {
  eslint: {
    // variable names should be longer than 2 chars
    "id-length": "warn",
  },
  import: {
    // imports need to be in alphabetical order
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
  },
  react: {
    // > and } entities need to be escaped e.g. {'>'}
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [">", "}"],
      },
    ],
    // Disables prop-type checks since we're on Typescript
    "react/prop-types": "off",
    // Disables import React checks since it's injected through webpack / babel
    "react/react-in-jsx-scope": "off",
  },
  unicorn: {
    // Disables catch error name checks as we're already checking via id-length
    // and unicorn/prevent-abbreviations
    "unicorn/catch-error-name": "off",

    // Prevents bad abbreviations in our code. Overrides unicorn's defaults with
    // a more flexible one, and stops eslint --fix from breaking our code. We're
    // using eslint's id-length to do quick checks against really short variable
    // names (e.g. const x = 1)
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        extendDefaultReplacements: false,
        // When linting, each of the keys will have a list of suggestions.
        replacements: {
          // val is probably the worst way to name a variable so let's catch it
          val: {
            beExplicit: true,
            value: true,
          },
          // eslint-disable-next-line id-length
          e: {
            event: true,
            error: true,
          },
        },
      },
    ],

    "unicorn/no-fn-reference-in-iterator": "warn",
    "unicorn/no-null": "warn",
    "unicorn/no-reduce": "warn",
    "unicorn/no-useless-undefined": "warn",
    "unicorn/prefer-optional-catch-binding": "warn",
    "unicorn/prefer-set-has": "warn",
    "unicorn/no-array-reduce": "warn",
  },
  typescript: {
    // Disables interface prefixing in favour of
    // @typescript-eslint/naming-convention
    "@typescript-eslint/interface-name-prefix": "off",
    // Disables camelCasing in favour of @typescript-eslint/naming-convention
    "@typescript-eslint/camelcase": "off",

    // Disables explicit return types as derived types are a common occurence in
    // code
    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/no-var-requires": "warn",

    // Warns about variables being used before being defined. @typescript-eslint
    // sets this as an error by default.
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-unused-vars": NO_UNUSED_RULE,

    // Enforce naming conventions across the whole code-base. Built from the
    // eslint camelCase and IPrefixing bases.
    "@typescript-eslint/naming-convention": [
      "error",
      // Fallback - everything should be in camelCase
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      // Variable assignment. camelCase should be used for most variables,
      // UPPER_CASE for constants and snake_case to support various code that
      // use it.
      {
        selector: "variable",
        format: ["camelCase", "snake_case", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      // Parameters (primitive and object-based arguments).
      // (camelCase, snake_case, {innerKey, inner_key}) => {}
      {
        selector: "parameter",
        format: ["camelCase", "snake_case"],
        leadingUnderscore: "allow",
      },
      // Object/class properties. Allows several formats to widen support.
      {
        selector: "property",
        format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      // Typescript types
      {
        selector: "typeLike",
        format: ["PascalCase", "UPPER_CASE"],
      },
      // Typescript enums
      {
        selector: "enum",
        format: ["PascalCase", "UPPER_CASE"],
      },
      // Typescript enum properties
      {
        selector: "enumMember",
        format: ["PascalCase", "UPPER_CASE"],
      },
      // Typescript interfaces. Our rule does not prohibit using underscores,
      // or prefixes (e.g. I). People should be left free to write how they
      // want.
      {
        selector: "interface",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
      },
    ],

    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/unbound-method": "warn",

    // Disables the following rules as they break with @typescript-eslint
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",

    // These are disabled for dev environments, to keep linting fast. They may
    // be enabled for CI/CD to provide deeper linting insights.
    "import/no-named-as-default": "off",
    "import/no-cycle": "off",
    "import/no-unused-modules": "off",
    "import/no-deprecated": "off",
  },
  javascript: {
    "no-unused-vars": NO_UNUSED_RULE,
  },
}

/**
 * Creates the extends config.
 * @param type enable extends by type.
 * @param isEnableReact enable react support.
 */
const buildESLintExtends = (type: "js" | "ts", isEnableReact: boolean) => {
  const isTS = type === "ts"
  return [
    // use eslint as base
    "eslint:recommended",

    // use unicorn's base
    "plugin:unicorn/recommended",

    // use imports's base
    "plugin:import/errors",
    "plugin:import/warnings",
    // enables import typescript support
    isTS && "plugin:import/typescript",

    // use react's base
    isEnableReact && "plugin:react/recommended",
    // use react's hooks base
    isEnableReact && "plugin:react-hooks/recommended",

    // enables eslint-recommended typescript support
    isTS && "plugin:@typescript-eslint/eslint-recommended",
    // enables @typescript-eslint's base
    isTS && "plugin:@typescript-eslint/recommended",
    // enables type checking
    isTS && "plugin:@typescript-eslint/recommended-requiring-type-checking",

    // turns off prettier-related rules
    "prettier",
    // enables prettier react support
    isEnableReact && "prettier/react",
    // enables prettier support for typescript
    isEnableReact && isTS && "prettier/@typescript-eslint",
  ].filter(Boolean) as string[]
}

/**
 * Builds rules for eslint.
 * @param type enable rules by type.
 * @param isEnableReact enable react support.
 */
const buildESLintRules = (
  type: "js" | "ts",
  isEnableReact: boolean
): Linter.Config["rules"] => {
  const isTS = type === "ts"
  const baseRules = {
    ...ESLINT_RULES.eslint,
    ...ESLINT_RULES.import,
    ...(isEnableReact && ESLINT_RULES.react),
    ...ESLINT_RULES.unicorn,
  }
  if (isTS) {
    Object.assign(baseRules, ESLINT_RULES.typescript)
  } else {
    Object.assign(baseRules, ESLINT_RULES.javascript)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return baseRules as any
}

/**
 * Builds an eslint config based on a given preset.
 * @param presets default, next, typescript
 *
 * default - jest, node, prettier, typescript, react
 * typescript - jest, node, prettier, typescript support
 * next - same as default, but with overrides
 *
 * The following parsers are used:
 * babel-eslint - js
 * @typescript-eslint/parser - ts
 *
 * The following plugins are used:
 * eslint-plugin-import
 * eslint-plugin-promise
 * eslint-plugin-unicorn
 *
 * And with react support, these are enabled:
 * eslint-plugin-react
 * eslint-plugin-react-hooks
 */
export default function jnprtConfig(
  preset: PRESET_TYPES = PRESET_TYPES.DEFAULT
) {
  // Prepare react-specific configs
  const isEnableReact = [PRESET_TYPES.DEFAULT, PRESET_TYPES.NEXT].includes(
    preset
  )
  const jestExtensions = [
    "js",
    "ts",
    isEnableReact && "tsx",
    isEnableReact && "jsx",
  ]
    .filter(Boolean)
    .join(",")

  const plugins = [
    "unicorn",
    isEnableReact && "react",
    isEnableReact && "react-hooks",
  ].filter(Boolean) as string[]

  const settings: Linter.BaseConfig<Linter.RulesRecord>["settings"] = {
    ...(isEnableReact && {
      react: {
        version: "detect",
      },
    }),
  }

  const parserOptions: Linter.ParserOptions = {
    ecmaFeatures: {
      ...(isEnableReact && {
        jsx: true,
      }),
    },
    ecmaVersion: 2020,
    sourceType: "module",
  }

  // Preset-specific global overrides
  const presetConfigOverrides = ESLINT_PRESET_EXTRA_OVERRIDES[preset] || []

  // Build preset-based extends and rulesets
  const globalExtends = buildESLintExtends("js", isEnableReact)
  const globalRules = buildESLintRules("js", isEnableReact)

  const globalOverrides: Linter.ConfigOverride<Linter.RulesRecord>[] = [
    // Typescript rules
    {
      files: ["**/*.ts", isEnableReact && "**/*.tsx"].filter(
        Boolean
      ) as string[],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: buildESLintExtends("ts", isEnableReact),
      rules: buildESLintRules("ts", isEnableReact),
    },
    // Jest-specific rules
    {
      files: ["**/__tests__/**", `**/*.{test|spec}.{${jestExtensions}}`],
      env: {
        jest: true,
      },
    },
    ...(isEnableReact ? ESLINT_REACT_OVERRIDES : []),
    ...presetConfigOverrides,
  ]

  const config: Linter.Config = {
    root: true,
    extends: globalExtends,
    parser: "babel-eslint",
    parserOptions,
    plugins,
    settings,
    rules: globalRules,
    overrides: globalOverrides,
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
    },
  }

  return config
}
