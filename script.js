const canvas = document.getElementById('render-canvas');
const ctx = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;
const ParticlesArray = [];

function ddddd() {

    gradient = ctx.createLinearGradient(0, 0, innerWidth, 0);
    gradient.addColorStop(0, "hsla(60, 100%, 50%,0.05)");
    gradient.addColorStop(0.25, "hsla(120 , 100%, 50%,0.05)");
    gradient.addColorStop(0.5, "hsla(240, 100%, 50%,0.05)");
    gradient.addColorStop(1, "hsla( 352, 100%, 50%,0.05)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
};
const numberofParticles = 100;
class Particles {
    innerHeight;
    innerWidth;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = Math.round(Math.random() * 5) + 12;
        this.height = Math.round(Math.random() * 5) + 12;
        this.seedx = 1;
        this.seedy = 1;
        this.r = Math.round(Math.random() * 255);
        this.g = Math.round(Math.random() * 255);
        this.b = Math.round(Math.random() * 255);
    }
    update() {
        this.x += Math.round(Math.random() * 5) * this.seedx;
        this.y += Math.round(Math.random() * 5) * this.seedy;
        this.x -= Math.round(Math.random() * 5) * this.seedx;
        this.y -= Math.round(Math.random() * 5) * this.seedy;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + this.r + "," + this.g + "," + this.b + ", " + Math.random() / 2 + " )";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.fill()
    }

}

function init() {
    for (let i = 0; i < numberofParticles / 2; i++) {
        var x = Math.round(Math.random() * canvas.width);
        var y = Math.round(Math.random() * canvas.height);
        ParticlesArray.push(new Particles(x, y));
    }
    for (let i = 1; i < numberofParticles / 2; i++) {
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        ParticlesArray.push(new Particles(x, y));
    }
}
init()

function animate() {
    setInterval(ddddd(), 3000)
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
    animate();
})