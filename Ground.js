class ground {
    constructor(x,y,height,width){
        var options=        {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;   
        World.add(world,this.body);
    }
    display(color){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(color);
        rect(pos.x, pos.y, this.width, this.height);
        
    }
        }
        
    
