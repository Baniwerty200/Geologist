class hammer {
    constructor(x,y,height,width){
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;   
        World.add(world,this.body);
    }
    display(color){
        var pos =this.body.position;
        var angle=this.body.angle;
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(color);
        rect(0, 0, this.width, this.height);

        pop();
    }
}