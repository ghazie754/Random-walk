const canvas = document.getElementById('render-canvas');
const ctx = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;
const ParticlesArray = [];

function LinearGradient() {
    gradient = ctx.createLinearGradient(0, 0, innerWidth, 0);
    gradient.addColorStop(0, "hsla(60, 100%, 50%,0.03)");
    gradient.addColorStop(0.25, "hsla(120 , 100%, 50%,0.03)");
    gradient.addColorStop(0.5, "hsla(240, 100%, 50%,0.03)");
    gradient.addColorStop(1, "hsla( 352, 100%, 50%,0.03)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
};
const numberofParticles = 20;
class Reactangle {
    innerHeight;
    innerWidth;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = Math.round(Math.random() * 21) + 4;
        this.height = Math.round(Math.random() * 21) + 4;
        this.seed = 5;
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
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + this.r + "," + this.g + "," + this.b + ", 1 )";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.fill()
    }

}
class Square {
    innerHeight;
    innerWidth;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.round(Math.random() * 20);
        this.seed = 5;
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
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + this.r + "," + this.g + "," + this.b + ", 1 )";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.closePath();
        ctx.fill()
    }

}
class Circle {
    innerHeight;
    innerWidth;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.round(Math.random() * 25);
        this.seed = 5;
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
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + this.r + "," + this.g + "," + this.b + ", 1 )";
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill()
    }

}

function init() {
    for (let i = 0; i < numberofParticles; i++) {
        var x = Math.round(Math.random() * canvas.width);
        var y = Math.round(Math.random() * canvas.height);
        ParticlesArray.push(new Reactangle(x, y), new Square(x, y), new Circle(x, y));
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        ParticlesArray.push(new Reactangle(x, y), new Square(x, y), new Circle(x, y));
    }
}
init()

function animate() {
    LinearGradientTime = setInterval(LinearGradient(), 5000);
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
})
window.addEventListener("click", function() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;

})