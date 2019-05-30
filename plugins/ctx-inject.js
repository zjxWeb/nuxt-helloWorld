// export default ({ app }, inject) => {
//     // Set the function directly on the context.app object
//     app.sort = (arr) => arr.sort();
//   }
export default ({ app }, inject) => {
    app.sort = (arr) => arr.sort();
    inject('integerSort',arr => arr.sort((a,b) =>
     {return (a-b)
    }))
    
  }