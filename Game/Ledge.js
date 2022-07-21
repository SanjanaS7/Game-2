class Ledge {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        fill(173,99,99);
        stroke("white");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}