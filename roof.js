class Roof{
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, {isStatic:true});
    World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;    
    rectMode(CENTER);
    fill("gray");
    rect(pos.x, pos.y, this.width, this.height);
  }
}
