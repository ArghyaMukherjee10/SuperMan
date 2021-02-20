class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.7,
            'friction':0.5,
            'density':3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("red")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
       
      }
}