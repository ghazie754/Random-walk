const canvas = document.getElementById('render-canvas');
const ctx = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;
const ParticlesArray = [];
gradient = ctx.createLinearGradient(0, 0, innerWidth, 0);
for (let i = 0; i < 4; i++) {

    gradient.addColorStop(0, "hsl(60, 100%, 50%)");
    gradient.addColorStop(0.25, "hsl(120 , 100%, 50%)");
    gradient.addColorStop(0.5, "hsl(240, 100%, 50%)");
    gradient.addColorStop(1, "hsl( 352, 100%, 50%)");
}
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, innerWidth, innerHeight);
const numberofParticles = 250;
class Particles {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = Math.round(Math.random() * 10) + 5;
        this.height = Math.round(Math.random() * 10) + 5;
        this.seed = 2;
        this.r = Math.round(Math.random() * 255);
        this.g = Math.round(Math.random() * 255);
        this.b = Math.round(Math.random() * 255);
    }
    update() {
        this.x += Math.round(Math.random() * 5) * this.seed;
        this.y += Math.round(Math.random() * 5) * this.seed;
        this.x -= Math.round(Math.random() * 5) * this.seed;
        this.y -= Math.round(Math.random() * 5) * this.seed;
    }
    draw() {
        ctx.fillStyle = "rgba(" + this.r + "," + this.g + "," + this.b + ",0.5)";
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.fill()
    }

}

function init() {
    for (let i = 0; i < numberofParticles / 2; i++) {
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        ParticlesArray.push(new Particles(x, y))
    }
    for (let i = 0; i < numberofParticles / 2; i++) {
        var x = canvas.width * Math.round(Math.random());
        var y = canvas.height * Math.round(Math.random());
        ParticlesArray.push(new Particles(x, y))
    }
}
init()

function animate() {
    for (let i = 0; i < ParticlesArray.length; i++) {
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize", function() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;

    gradient = ctx.createRadialGradient(innerWidth / 1.5, innerHeight / 1.5, 1, innerWidth, innerHeight, 1110)
    gradient.addColorStop(0, "hsl( 36, 100%, 50%)");
    gradient.addColorStop(0.1, "hsl( 72, 100%, 50%)");
    gradient.addColorStop(0.3, "hsl( 108, 100%, 50%)");
    gradient.addColorStop(0.2, "hsl( 144, 100%, 50%)");
    gradient.addColorStop(0.4, "hsl( 180, 100%, 50%)");
    gradient.addColorStop(0.6, "hsl( 216, 100%, 50%)");
    gradient.addColorStop(0.7, "hsl( 252, 100%, 50%)");
    gradient.addColorStop(0.8, "hsl( 288, 100%, 50%)");
    gradient.addColorStop(0.9, "hsl( 324, 100%, 50%)");
    gradient.addColorStop(1, "hsl( 360, 100%, 50%)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
}, undefined)