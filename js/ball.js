class ball {
    constructor(x, y, r){
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
           
        }
        this.r = r;
        this.body=Bodies.circle(x, y,  (this.r)/2, options);
        this.image = loadImage("images/baseball.png")
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
       // pos.x = mouseX;
       // pos.y = mouseY
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,55,55);
        pop();
      }
}

