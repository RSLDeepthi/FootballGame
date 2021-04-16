class Boy
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.2,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.width=width;
        this.height = height;
		this.image=loadImage("Boy.png");
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		//this.body=Bodies.circle(x, y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
            Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
			pop()
			
	}

}