module.exports = {
  entry:{
    main:'./src/lothar.js'
    
  }, 
  output: {
    
    path:__dirname+'/lib',
    filename: 'lothar.js'

  },
  
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};