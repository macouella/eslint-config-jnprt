import jnprtConfig, { PRESET_TYPES } from "./jnprt"

describe("jnprtConfig", () => {
  describe("default config", () => {
    it("should create a correct default config", () => {
      expect(jnprtConfig()).toMatchInlineSnapshot(`
        Object {
          "env": Object {
            "browser": true,
            "commonjs": true,
            "es6": true,
            "node": true,
          },
          "extends": Array [
            "eslint:recommended",
            "plugin:unicorn/recommended",
            "plugin:import/errors",
            "plugin:import/warnings",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
            "prettier",
            "prettier/react",
          ],
          "overrides": Array [
            Object {
              "extends": Array [
                "eslint:recommended",
                "plugin:unicorn/recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                "plugin:react/recommended",
                "plugin:react-hooks/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier",
                "prettier/react",
                "prettier/@typescript-eslint",
              ],
              "files": Array [
                "**/*.ts",
                "**/*.tsx",
              ],
              "parser": "@typescript-eslint/parser",
              "plugins": Array [
                "@typescript-eslint",
              ],
              "rules": Object {
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/naming-convention": Array [
                  "error",
                  Object {
                    "format": Array [
                      "camelCase",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "default",
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "snake_case",
                      "UPPER_CASE",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "variable",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                    ],
                    "leadingUnderscore": "allow",
                    "prefix": Array [
                      "is",
                      "should",
                      "has",
                      "can",
                      "did",
                      "will",
                    ],
                    "selector": "variable",
                    "types": Array [
                      "boolean",
                    ],
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "snake_case",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "parameter",
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "PascalCase",
                      "snake_case",
                      "UPPER_CASE",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "property",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "typeLike",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "enum",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "enumMember",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "interface",
                  },
                ],
                "@typescript-eslint/no-unused-vars": Array [
                  "warn",
                  Object {
                    "args": "none",
                    "ignoreRestSiblings": true,
                  },
                ],
                "@typescript-eslint/no-use-before-define": "warn",
                "@typescript-eslint/no-var-requires": "warn",
                "id-length": "warn",
                "import/default": "off",
                "import/named": "off",
                "import/namespace": "off",
                "import/no-cycle": "off",
                "import/no-deprecated": "off",
                "import/no-named-as-default": "off",
                "import/no-named-as-default-member": "off",
                "import/no-unused-modules": "off",
                "import/order": Array [
                  "error",
                  Object {
                    "alphabetize": Object {
                      "caseInsensitive": true,
                      "order": "asc",
                    },
                    "newlines-between": "never",
                  },
                ],
                "react/no-unescaped-entities": Array [
                  "error",
                  Object {
                    "forbid": Array [
                      ">",
                      "}",
                    ],
                  },
                ],
                "react/prop-types": "off",
                "react/react-in-jsx-scope": "off",
                "unicorn/catch-error-name": "off",
                "unicorn/prevent-abbreviations": Array [
                  "warn",
                  Object {
                    "extendDefaultReplacements": false,
                    "replacements": Object {
                      "e": Object {
                        "error": true,
                        "event": true,
                      },
                      "val": Object {
                        "beExplicit": true,
                        "value": true,
                      },
                    },
                  },
                ],
              },
            },
            Object {
              "env": Object {
                "jest": true,
              },
              "files": Array [
                "**/__tests__/**",
                "**/*.{test|spec}.{js,ts,tsx,jsx}",
              ],
            },
            Object {
              "files": Array [
                "**/*.{jsx,tsx}",
              ],
              "rules": Object {
                "@typescript-eslint/naming-convention": Array [
                  "error",
                  Object {
                    "format": Array [
                      "camelCase",
                      "PascalCase",
                      "snake_case",
                      "UPPER_CASE",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "variable",
                  },
                ],
                "unicorn/filename-case": Array [
                  "error",
                  Object {
                    "cases": Object {
                      "camelCase": true,
                      "pascalCase": true,
                    },
                    "ignore": Array [
                      "[A-Z]+.(j|t)sx",
                    ],
                  },
                ],
              },
            },
          ],
          "parser": "babel-eslint",
          "parserOptions": Object {
            "ecmaFeatures": Object {
              "jsx": true,
            },
            "ecmaVersion": 2020,
            "sourceType": "module",
          },
          "plugins": Array [
            "unicorn",
            "react",
            "react-hooks",
          ],
          "root": true,
          "rules": Object {
            "id-length": "warn",
            "import/order": Array [
              "error",
              Object {
                "alphabetize": Object {
                  "caseInsensitive": true,
                  "order": "asc",
                },
                "newlines-between": "never",
              },
            ],
            "no-unused-vars": Array [
              "warn",
              Object {
                "args": "none",
                "ignoreRestSiblings": true,
              },
            ],
            "react/no-unescaped-entities": Array [
              "error",
              Object {
                "forbid": Array [
                  ">",
                  "}",
                ],
              },
            ],
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "unicorn/catch-error-name": "off",
            "unicorn/prevent-abbreviations": Array [
              "warn",
              Object {
                "extendDefaultReplacements": false,
                "replacements": Object {
                  "e": Object {
                    "error": true,
                    "event": true,
                  },
                  "val": Object {
                    "beExplicit": true,
                    "value": true,
                  },
                },
              },
            ],
          },
          "settings": Object {
            "react": Object {
              "version": "detect",
            },
          },
        }
      `)
    })

    it("should create a correct next config", () => {
      expect(jnprtConfig(PRESET_TYPES.NEXT)).toMatchInlineSnapshot(`
        Object {
          "env": Object {
            "browser": true,
            "commonjs": true,
            "es6": true,
            "node": true,
          },
          "extends": Array [
            "eslint:recommended",
            "plugin:unicorn/recommended",
            "plugin:import/errors",
            "plugin:import/warnings",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
            "prettier",
            "prettier/react",
          ],
          "overrides": Array [
            Object {
              "extends": Array [
                "eslint:recommended",
                "plugin:unicorn/recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                "plugin:react/recommended",
                "plugin:react-hooks/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier",
                "prettier/react",
                "prettier/@typescript-eslint",
              ],
              "files": Array [
                "**/*.ts",
                "**/*.tsx",
              ],
              "parser": "@typescript-eslint/parser",
              "plugins": Array [
                "@typescript-eslint",
              ],
              "rules": Object {
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/naming-convention": Array [
                  "error",
                  Object {
                    "format": Array [
                      "camelCase",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "default",
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "snake_case",
                      "UPPER_CASE",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "variable",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                    ],
                    "leadingUnderscore": "allow",
                    "prefix": Array [
                      "is",
                      "should",
                      "has",
                      "can",
                      "did",
                      "will",
                    ],
                    "selector": "variable",
                    "types": Array [
                      "boolean",
                    ],
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "snake_case",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "parameter",
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "PascalCase",
                      "snake_case",
                      "UPPER_CASE",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "property",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "typeLike",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "enum",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "enumMember",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "interface",
                  },
                ],
                "@typescript-eslint/no-unused-vars": Array [
                  "warn",
                  Object {
                    "args": "none",
                    "ignoreRestSiblings": true,
                  },
                ],
                "@typescript-eslint/no-use-before-define": "warn",
                "@typescript-eslint/no-var-requires": "warn",
                "id-length": "warn",
                "import/default": "off",
                "import/named": "off",
                "import/namespace": "off",
                "import/no-cycle": "off",
                "import/no-deprecated": "off",
                "import/no-named-as-default": "off",
                "import/no-named-as-default-member": "off",
                "import/no-unused-modules": "off",
                "import/order": Array [
                  "error",
                  Object {
                    "alphabetize": Object {
                      "caseInsensitive": true,
                      "order": "asc",
                    },
                    "newlines-between": "never",
                  },
                ],
                "react/no-unescaped-entities": Array [
                  "error",
                  Object {
                    "forbid": Array [
                      ">",
                      "}",
                    ],
                  },
                ],
                "react/prop-types": "off",
                "react/react-in-jsx-scope": "off",
                "unicorn/catch-error-name": "off",
                "unicorn/prevent-abbreviations": Array [
                  "warn",
                  Object {
                    "extendDefaultReplacements": false,
                    "replacements": Object {
                      "e": Object {
                        "error": true,
                        "event": true,
                      },
                      "val": Object {
                        "beExplicit": true,
                        "value": true,
                      },
                    },
                  },
                ],
              },
            },
            Object {
              "env": Object {
                "jest": true,
              },
              "files": Array [
                "**/__tests__/**",
                "**/*.{test|spec}.{js,ts,tsx,jsx}",
              ],
            },
            Object {
              "files": Array [
                "**/pages/**/*.{jsx,tsx}",
              ],
              "rules": Object {
                "unicorn/filename-case": Array [
                  "error",
                  Object {
                    "case": "kebabCase",
                    "ignore": Array [
                      "[A-Z]+.(j|t)sx",
                    ],
                  },
                ],
              },
            },
            Object {
              "files": Array [
                "**/*.{jsx,tsx}",
              ],
              "rules": Object {
                "@typescript-eslint/naming-convention": Array [
                  "error",
                  Object {
                    "format": Array [
                      "camelCase",
                      "PascalCase",
                      "snake_case",
                      "UPPER_CASE",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "variable",
                  },
                ],
                "unicorn/filename-case": Array [
                  "error",
                  Object {
                    "cases": Object {
                      "camelCase": true,
                      "pascalCase": true,
                    },
                    "ignore": Array [
                      "[A-Z]+.(j|t)sx",
                    ],
                  },
                ],
              },
            },
          ],
          "parser": "babel-eslint",
          "parserOptions": Object {
            "ecmaFeatures": Object {
              "jsx": true,
            },
            "ecmaVersion": 2020,
            "sourceType": "module",
          },
          "plugins": Array [
            "unicorn",
            "react",
            "react-hooks",
          ],
          "root": true,
          "rules": Object {
            "id-length": "warn",
            "import/order": Array [
              "error",
              Object {
                "alphabetize": Object {
                  "caseInsensitive": true,
                  "order": "asc",
                },
                "newlines-between": "never",
              },
            ],
            "no-unused-vars": Array [
              "warn",
              Object {
                "args": "none",
                "ignoreRestSiblings": true,
              },
            ],
            "react/no-unescaped-entities": Array [
              "error",
              Object {
                "forbid": Array [
                  ">",
                  "}",
                ],
              },
            ],
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "unicorn/catch-error-name": "off",
            "unicorn/prevent-abbreviations": Array [
              "warn",
              Object {
                "extendDefaultReplacements": false,
                "replacements": Object {
                  "e": Object {
                    "error": true,
                    "event": true,
                  },
                  "val": Object {
                    "beExplicit": true,
                    "value": true,
                  },
                },
              },
            ],
          },
          "settings": Object {
            "react": Object {
              "version": "detect",
            },
          },
        }
      `)
    })

    it("should create a correct typescript config", () => {
      expect(jnprtConfig(PRESET_TYPES.TYPESCRIPT)).toMatchInlineSnapshot(`
        Object {
          "env": Object {
            "browser": true,
            "commonjs": true,
            "es6": true,
            "node": true,
          },
          "extends": Array [
            "eslint:recommended",
            "plugin:unicorn/recommended",
            "plugin:import/errors",
            "plugin:import/warnings",
            "prettier",
          ],
          "overrides": Array [
            Object {
              "extends": Array [
                "eslint:recommended",
                "plugin:unicorn/recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier",
              ],
              "files": Array [
                "**/*.ts",
              ],
              "parser": "@typescript-eslint/parser",
              "plugins": Array [
                "@typescript-eslint",
              ],
              "rules": Object {
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/naming-convention": Array [
                  "error",
                  Object {
                    "format": Array [
                      "camelCase",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "default",
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "snake_case",
                      "UPPER_CASE",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "variable",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                    ],
                    "leadingUnderscore": "allow",
                    "prefix": Array [
                      "is",
                      "should",
                      "has",
                      "can",
                      "did",
                      "will",
                    ],
                    "selector": "variable",
                    "types": Array [
                      "boolean",
                    ],
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "snake_case",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "parameter",
                  },
                  Object {
                    "format": Array [
                      "camelCase",
                      "PascalCase",
                      "snake_case",
                      "UPPER_CASE",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "property",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "typeLike",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "enum",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                      "UPPER_CASE",
                    ],
                    "selector": "enumMember",
                  },
                  Object {
                    "format": Array [
                      "PascalCase",
                    ],
                    "leadingUnderscore": "allow",
                    "selector": "interface",
                  },
                ],
                "@typescript-eslint/no-unused-vars": Array [
                  "warn",
                  Object {
                    "args": "none",
                    "ignoreRestSiblings": true,
                  },
                ],
                "@typescript-eslint/no-use-before-define": "warn",
                "@typescript-eslint/no-var-requires": "warn",
                "id-length": "warn",
                "import/default": "off",
                "import/named": "off",
                "import/namespace": "off",
                "import/no-cycle": "off",
                "import/no-deprecated": "off",
                "import/no-named-as-default": "off",
                "import/no-named-as-default-member": "off",
                "import/no-unused-modules": "off",
                "import/order": Array [
                  "error",
                  Object {
                    "alphabetize": Object {
                      "caseInsensitive": true,
                      "order": "asc",
                    },
                    "newlines-between": "never",
                  },
                ],
                "unicorn/catch-error-name": "off",
                "unicorn/prevent-abbreviations": Array [
                  "warn",
                  Object {
                    "extendDefaultReplacements": false,
                    "replacements": Object {
                      "e": Object {
                        "error": true,
                        "event": true,
                      },
                      "val": Object {
                        "beExplicit": true,
                        "value": true,
                      },
                    },
                  },
                ],
              },
            },
            Object {
              "env": Object {
                "jest": true,
              },
              "files": Array [
                "**/__tests__/**",
                "**/*.{test|spec}.{js,ts}",
              ],
            },
          ],
          "parser": "babel-eslint",
          "parserOptions": Object {
            "ecmaFeatures": Object {},
            "ecmaVersion": 2020,
            "sourceType": "module",
          },
          "plugins": Array [
            "unicorn",
          ],
          "root": true,
          "rules": Object {
            "id-length": "warn",
            "import/order": Array [
              "error",
              Object {
                "alphabetize": Object {
                  "caseInsensitive": true,
                  "order": "asc",
                },
                "newlines-between": "never",
              },
            ],
            "no-unused-vars": Array [
              "warn",
              Object {
                "args": "none",
                "ignoreRestSiblings": true,
              },
            ],
            "unicorn/catch-error-name": "off",
            "unicorn/prevent-abbreviations": Array [
              "warn",
              Object {
                "extendDefaultReplacements": false,
                "replacements": Object {
                  "e": Object {
                    "error": true,
                    "event": true,
                  },
                  "val": Object {
                    "beExplicit": true,
                    "value": true,
                  },
                },
              },
            ],
          },
          "settings": Object {},
        }
      `)
    })
  })
})
