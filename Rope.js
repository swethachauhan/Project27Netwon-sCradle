class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
       
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        stroke(255)
        line(pointA.x, pointA.y-bobDiameter, pointB.x+this.offsetX , pointB.y+this.offsetY);
       
    }
    
}