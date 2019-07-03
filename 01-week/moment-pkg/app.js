// 1. CREATE A .gitignore file and add /node_modules 👈👈👈👈👈

// Emilys-iMac:moment emilyannemoses$ npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help json` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (moment) 

// Emilys-iMac:moment emilyannemoses$ npm install moment
// npm WARN moment-pkg@1.0.0 No description
// npm WARN moment-pkg@1.0.0 No repository field.

// + moment@2.24.0
// added 1 package from 6 contributors and audited 1 package in 0.759s
// found 0 vulnerabilities

const moment = require('moment');

const day = moment().format('dddd');

console.log('Today is', day);