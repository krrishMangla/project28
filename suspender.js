class Suspender{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:20
        }
       
        this.suspender = Constraint.create(options);
        World.add(world, this.suspender);

        this.pointB = pointB
    }
    
     attach(body){
        this.suspender.bodyA = body;
    }


    display()
    {
     if(this.suspender.bodyA)
      {
       var pointA = this.suspender.bodyA.position;
       var pointB = this.pointB;
       strokeWeight(4);
       line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }

    fly()
    {
      this.suspender.bodyA=null;
    }
}