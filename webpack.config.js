 var path = require('path');
 module.exports = {
     entry: "./entry.js",
     output: {
         path: __dirname,
         filename: "bundle.js"
     },
     module: {
         loaders: [
             { test: /\.js$/,
               exclude: /node_modules/,
               loader: 'babel', // 'babel-loader' is also a legal name to reference
               query: {
                 presets: ['es2015']
             }
           }
         ]
     },


 };

