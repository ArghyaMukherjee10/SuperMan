class Rope{
    constructor( bodyA, pointB){
        var options ={
            bodyA : bodyA,
           pointB : pointB,
            length: 350,
            stiffness: 0.12
        }
       this.sling = Constraint.create(options)
       this.pointB = pointB
       World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null
   }

   attach(body){
        this.sling.bodyA = body
   }


    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
            push();
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
         
                     
    }
}