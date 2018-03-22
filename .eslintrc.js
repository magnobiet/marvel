// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		es6: true,
		browser: true,
	},
	extends: 'eslint:recommended',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// check if imports actually resolve
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	// add your custom rules here
	'rules': {
		// don't require .vue extension when importing
		/*'import/extensions': ['error', 'always', {
			'js': 'never',
			'vue': 'never'
		}],
		// allow optionalDependencies
		'import/no-extraneous-dependencies': ['error', {
			'optionalDependencies': ['test/unit/index.js']
		}],*/
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'no-console': ['error', {
			'allow': ['log', 'warn', 'error', 'debug']
		}],
		'quotes': ['error', 'single'],
		'camelcase': ['error'],
		'semi': ['error', 'always']
	}
};
