class Bob{
  constructor(x,y,radius){
    var options={
      isStatic:false,
      restitution:1,
      friction:0,
      density:0.8
    }
    
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius
    World.add(world,this.body);

  }
  display(){
    var paperpos=this.body.position;
    push()
			translate(paperpos.x, paperpos.y);
			strokeWeight(3);
			fill("magenta")
      ellipse(0,0,this.radius*2,this.radius*2);
			pop()
   
  }
}