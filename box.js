class Box{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity=255;
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        if(this.body.speed < 3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
         }
         
       else{
         World.remove(world, this.body)
        push();
        this.Visiblity = this.Visiblity - 10;
        tint(255,this.Visiblity);
        
        pop();
       }
      }
    }