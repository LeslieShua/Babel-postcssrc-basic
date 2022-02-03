 //간소화
 module.exports = {
   plugins: [
     require('autoprefixer')
   ]
 }
 
 
 
 
 //node.js 환경에서는 
 // ESM 대신에 CommonJS

 // import autoprefixer from 'autoprefixer' 대신에

//  const autoprefixer = require('autoprefixer')

//  // export
//  //   plugins: [
//  //     autoprefixer
// //   ]
// // } 대신

//  module.exports = {
//    plugins: [
//      autoprefixer
//    ]
//  }