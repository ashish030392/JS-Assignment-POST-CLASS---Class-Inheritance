  
// declare class

// export class using module.exports

module.exports = class Shape {
    constructor(c){
        this.color=c===undefined?"red":c;
        }
        drawShape(){
            console.log("draw the shape"); 
        }
        calculateArea(){
           console.log("area is area"); 
           return 1;
        }
}
