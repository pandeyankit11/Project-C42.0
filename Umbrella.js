class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("Walking Frame/walking_1.png");
        this.batmanImg = loadImage("bat/Bestman-01.png");
        World.add(world, this.body);
        
        
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);

        if(frameCount >= 200){
            image(this.batmanImg.pos.x,pos.y+70,200,300);
        }
    }
}
