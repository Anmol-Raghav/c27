class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length: 40,
            stiffness:0.2

        }
    this.Chain = Constraint.create(options);
    World.add(world,this.Chain);
    }
    display(){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;
        strokeWeight(4);
       // line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
}