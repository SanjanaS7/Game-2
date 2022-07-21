class Player extends BaseClass {
    constructor(x,y, width, height){
      super(x,y,50,50);
      this.image = loadImage("Images/blob.png");
    }
  
    display() {

      if(keyIsDown(RIGHT_ARROW)){
        Matter.Body.applyForce(this.body, {x: 0, y: 0}, {x: 0.5, y: 0});
      }
      if(keyIsDown(LEFT_ARROW)){
        Matter.Body.applyForce(this.body, {x: 0, y: 0}, {x: -0.5, y: 0});
      }
      if(keyIsDown(UP_ARROW)){
        Matter.Body.applyForce(this.body, {x: 0, y: 0}, {x: 0, y: -0.5});
      }
      if(keyIsDown(DOWN_ARROW)){
        Matter.Body.applyForce(this.body, {x: 0, y: 0}, {x: 0.5, y: 0.5});
      }
      
      super.display();

    }
  }