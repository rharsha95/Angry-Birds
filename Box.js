class Box {

    constructor(x,y,width,height) {

        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;
    }

    display() {
        var pos = this.body.position;
        this.angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(this.angle);
        fill("white");
        stroke(75);
        strokeWeight(5);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }

}