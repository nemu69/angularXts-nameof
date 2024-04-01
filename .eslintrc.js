/* eslint-env node */
module.exports = {
	extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: [ "./tsconfig.json" ],
	},
	plugins: [ "@typescript-eslint", "@stylistic" ],
	root: true,
	ignorePatterns: [ ".eslintrc.js" ],
	rules: {
		"@typescript-eslint/naming-convention": [
			"error",
			// All variables, functions and properties are camelCase
			{
				"selector": [ "variableLike", "classProperty" ],
				"modifiers": [ "public" ],
				"format": [ "camelCase" ]
			},
			// All private members have to be _camelCase
			{
				"selector": [ "memberLike", "classProperty" ],
				"modifiers": [ "private", "protected" ],
				"format": [ "camelCase" ],
				"leadingUnderscore": "require",
			},
			// Classes, enum, enumMembers and type names must be in PascalCase
			{
				"selector":  [ "class", "enum", "typeAlias", "enumMember", "typeProperty" ],
				"format": [ "PascalCase" ],
			}
		],

		"@typescript-eslint/prefer-for-of": "error", // Dot-notation

		"dot-notation": "off",
		"@typescript-eslint/dot-notation": "error",

		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

		"@typescript-eslint/prefer-nullish-coalescing": "error",

		"@stylistic/semi": [ "error", "always" ],

		"@stylistic/indent": [ "error", "tab" ],

		"@stylistic/arrow-spacing": [ "error", { "before": true, "after": true } ],

		"@stylistic/brace-style": [ "error", "allman", { "allowSingleLine": true } ],

		"@stylistic/comma-dangle": [ "error", "always-multiline" ],

		"@stylistic/comma-spacing": [ "error", {
			"before": false,
			"after": true
		} ],

		"@stylistic/func-call-spacing": [ "error", "never" ],

		"@stylistic/max-len": [ "error",
			{
				"code": 120, "tabWidth": 4,
				"comments": 120, "ignoreRegExpLiterals": true,
			} ],

		"@stylistic/max-statements-per-line": [ "error", { "max": 1 } ],

		"@stylistic/no-multi-spaces": "error",

		"@stylistic/no-multiple-empty-lines": "error", // Max 2

		"@stylistic/no-trailing-spaces": "error",

		"@stylistic/no-whitespace-before-property": "error",

		"@stylistic/quotes": [ "error", "double", { "allowTemplateLiterals": true } ],

		"@stylistic/object-curly-spacing": [ "error", "always" ],

		"@stylistic/array-bracket-spacing": [ "error", "always" ],

		"max-lines-per-function": [ "error", {
			"max": 50,
			"skipBlankLines": false,
			"skipComments": false,
		} ],

		"no-else-return": [ "error", { "allowElseIf": false } ],

		"no-lonely-if": "error",

		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "error",

		"no-unneeded-ternary": "error",

		"prefer-exponentiation-operator": "error",

		"prefer-template": "error", // --fix works on it.

		"require-await": "off",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/no-floating-promises": "error",

		"@stylistic/spaced-comment": [ "error", "always" ],

		"yoda": "error",

		"no-await-in-loop": "error",
	},
	"overrides": [
		{
		  "files": [ "*.spec.ts" ],
		  "rules": {
			"max-lines-per-function": "off"
		  }
		},
		{
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
			files: ["./node_modules/@typescript-nameof/types/index.d.cts"],
		},
	  ]
};
