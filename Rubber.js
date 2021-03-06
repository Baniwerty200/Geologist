class rubber {
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':5.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius;  
        World.add(world,this.body); 
    }
    display(color){
        var pos =this.body.position;
        var angle=this.body.angle;
        
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill(color);
       ellipse(0, 0, this.radius);

       pop();
    }
}