class Box {

    constructor(x,y,width,height) {

        var options = {
            restitution: 0.8
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;
    }

    display() {
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y)
        this.angle = this.body.angle;
        rotate(this.angle);
        fill("white");
        stroke(75);
        strokeWeight(5);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }

}