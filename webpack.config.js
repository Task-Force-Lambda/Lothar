module.exports = {
  entry:{
    main:'./src/lothar.js'
    
  }, 
  output: {
    library:'Lothar',
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