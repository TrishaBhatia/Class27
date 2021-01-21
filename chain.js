class Chain
{
  constructor(bodyA,pointB)
  {
    var options={
         bodyA:bodyA,
         pointB:pointB,
         length :10,
         stiffness :0.04
     }
     this.pointB=pointB;
     this.chain=Matter.Constraint.create(options);
     World.add(world,this.chain);
  }
     fly()
    {
      this.chain.bodyA=null
    }
  display()
  {
      if (this.chain.bodyA)
      {

     var pointA=this.chain.bodyA.position
     var pointB=this.pointB
     strokeWeight(4)
     stroke("black")
     line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
  }

}
