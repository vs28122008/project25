class Paper
{
    constructor(x,y,radius)

    {
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
    }
    
  

    this.image=loadImage("paper.png");
    this.body = Bodies.circle(x,y,radius, options);
    

        World.add(world, this.body);
    }
    display()
    {

        var paperpos=this.body.position;
         
        push();
        
        imageMode(CENTER);

        fill("255");
        image (this.image,100,596,this.radius/20);
        pop()
        
    }       
}