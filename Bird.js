class Bird {

    constructor(x,y) {

        var options = {
            restitution: 0.8,
            friction: 0.3
        }

        this.body = Bodies.rectangle(x,y,50,50, options);
        World.add(world,this.body);

        this.width = 50;
        this.height = 50;
    }

    display() {
        var pos = this.body.position;
        this.angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y)
        rotate(this.angle);
        fill("red");
        stroke(75);
        strokeWeight(5);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }

}