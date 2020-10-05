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
        this.angle = this.body.angle;
        rotate(this.angle);
        fill("white");
        stroke(75);
        strokeWeight(5);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }

}