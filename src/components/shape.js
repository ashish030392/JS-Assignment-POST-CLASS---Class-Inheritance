// import using require
var msg = require('./shape.js');
// declare class


// export class using module.exports

module.exports= class Circle extends msg{
 constructor(...args){
  super(...args); 
 }
  calculateArea(){
    console.log("2*pi*r"); 
   return (2*pi*r);
  }
}
