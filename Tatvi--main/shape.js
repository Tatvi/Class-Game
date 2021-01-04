class Shape{
    constructor(x,y,width,height){
       var  option={
        'restitution':0.8,
        'friction':1.0,
        'density':0.05
        }
    this.body=Bodies.rectangle(x,y,width,height,option);
    this.height=height
    this.width=width
    World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill('blue');
        strokeWeight(6);
        stroke('pink');
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop()
    }

    }
