//common js code server side js

//available to other files (require or import)
module.exports ={
    //javascript in
    entry: [
        './src/index.jsx'
    ],
    //where we want to ouput our file
    output:{
        //jsx-js done and kept here
        //all the javascript will be here
        filename:'./bundle.js'
    },
    //allow us to use ES6 and babel
    module: {
        loaders:[{
            //ignore 
            exclude:/node_modules/,
            loader:'babel'
        }]
    },
    //look for these files
    resolve:{
        extensions:['','.js','jsx']
    }

};