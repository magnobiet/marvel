module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'camelcase': 'error',
		'semi': ['error', 'always'],
		'vue/attribute-hyphenation': ['error', 'always'],
		'vue/html-end-tags': 'error',
		'vue/html-indent': ['error', 'tab'],
		'vue/html-self-closing': 'error',
		'vue/require-default-prop': 'error',
		'vue/require-prop-types': 'error',
		'vue/attributes-order': 'error',
		'vue/html-quotes': ['error', 'double'],
		'vue/order-in-components': 'error'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
