 const canvas = document.querySelector('canvas');
 const c = canvas.getContext("2d");

 canvas.width = innerWidth;
 canvas.height = innerHeight;

 class Player {
     constructor(x,y,radius,color){
         this.x = x;
         this.y =y;
         this.radius = radius;
         this.color = color;

     }
     
 draw(){
     c.beginPath();
     c.arc(this.x,this.y,this.radius,Math.PI* 2,false);
     c.fillStyle= this.color;
     c.fill();
 }

 }

 class Projectiles {
     constructor(x,y,radius,color,velocity){
         this.x = x
         this.y = y
         this.radius = radius
         this.color = color
         this.velocity = velocity
     }
     draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,Math.PI* 2,false);
        c.fillStyle= this.color;
        c.fill();
 }
 update(){
     this.draw()
this.x = this.x + this.velocity.x
this.y = this.y + this.velocity.y
 }
}
  const x = canvas.width / 2
  const y = canvas.height/ 2

 const player = new Player(x,y,40,'red');
 player.draw();
  
 const projectiles = new Projectiles(
    canvas.width / 2,
    canvas.height /2,
    5,
     'green',
    {
         x:-1,
      y:-1
   }
 )

 const projectiles2 = new Projectiles(
    canvas.width / 2,
    canvas.height /2,
    5,
     'red',
    {
         x:1,
      y: 1
   }
 )
     function animate(){
    requestAnimationFrame(animate)
    console.log('go')
    projectiles.forEach((projectiles)=> {
        projectiles.update()        
    });
    

 }

 addEventListener('click',(event) =>{
     const angle = Math.atan2( event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
     console.log(angle);
     projectiles.push(
         new Projectiles(canvas.width / 2, canvas.height / 2, 5, 'red', {x:1,y:1})
     )
     
 })
 animate();