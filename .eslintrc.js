module.exports = {
  'extends': 'airbnb-base',
  'plugins': ['jasmine'],
  "env": {
    "node": true,
    "jest": true,
    "jasmine": true
  },
  'overrides': [
    {
      'files': ['*.js'],
      'rules': {
        'comma-dangle': ['error', 'never'],
        'eol-last': 0,
        'no-trailing-spaces': 2,
        'object-curly-newline': ['error', {
          'ObjectPattern': { 'multiline': true }
        }],
        'no-param-reassign': 0,
        'import/newline-after-import': 0,
        'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
        'indent': [2, 2],
        'no-tabs': 1,
        'no-underscore-dangle': 0,
        'no-use-before-define': ["error", { "functions": false }],
        "no-console": 0,
        'max-len': 0
      }
    }
  ]
};
