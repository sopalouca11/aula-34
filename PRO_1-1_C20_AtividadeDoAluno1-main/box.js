class Box 
{
  constructor(x, y, w, h) 
  {
    let options = {
      friction: 1.0,
      restitution: 0.8,
      density: 0.04
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
}