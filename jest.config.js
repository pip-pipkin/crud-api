module.exports = {
    roots: [
      "<rootDir>/src"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.test.js",
    ],
    coverageThreshold: {
       "global": {
         "branches": 100,
         "functions": 100,
         "lines": 100,
         "statements": 100
       }
     },
   }