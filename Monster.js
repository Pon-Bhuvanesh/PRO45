class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 100, 
      frictionAir: 0.5
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("Firemonster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y+40);
			rectMode(CENTER)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
