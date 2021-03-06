module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "React": 'writable',
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": [0],
        "prettier/prettier": [
            "error",
            {
                "trailingComma": true,
                "singleQuote": true,
                "printWidth": 120
            }
        ]
    },
    "settings": {
        "import/resolver": {
        "node": {
            "paths": ["./"]
          }
        },
        "react": {
          "pragma": "React",
          "version": "16.9.0"
        }
      },
    "parser": "babel-eslint",
};