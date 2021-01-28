class Stone{
    constructor(x,y,radius){
      var options = {
         'isStatic':false,
         'restitution':0,
         'friction':1, 
         'density':1.2
        }  
        
      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }

   

    display()
	{
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     imageMode(CENTER);
     ellipseMode(RADIUS);
     image(this.image, 0,0,this.r*2, this.r*2)
	 pop();		
	}
}