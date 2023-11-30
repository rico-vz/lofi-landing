var MakeItRain = (function () {
    "use strict";
    return (function () {
        function t(t) {
            Object.assign(this, t),
                (this.angle = 0),
                (this.particles = []),
                this.canvas(),
                this.resWin(),
                (this.canvas = document.getElementById("canvas")),
                (this.ctx = this.canvas.getContext("2d")),
                this.getWid();
            for (var i = 0; i < this.numParticles; i++)
                this.particles.push({
                    x: Math.random() * this.W,
                    y: Math.random() * this.H,
                    length: Math.random() * this.maxParticleLength + 1,
                    speed: Math.random() * this.maxSpeed + 1,
                });
            this.drawRain();
        }
        var i = t.prototype;
        return (
            (i.getWid = function () {
                (this.W = window.innerWidth),
                    (this.H = window.innerHeight),
                    (this.canvas.width = this.W),
                    (this.canvas.height = this.H);
            }),
            (i.canvas = function () {
                var t = document.createElement("canvas");
                (t.id = "canvas"),
                    t.setAttribute(
                        "style",
                        "position: fixed; top: 0; pointer-events: none;"
                    ),
                    document.body.appendChild(t);
            }),
            (i.resWin = function () {
                var t = this;
                window.addEventListener("resize", function () {
                    t.getWid();
                });
            }),
            (i.rgbToRgba = function (t) {
                return "rgba(" + t + "," + this.rainOpacity + ")";
            }),
            (i.drawRain = function () {
                var t = this;
                setInterval(function () {
                    t.ctx.clearRect(0, 0, t.W, t.H),
                        (t.ctx.strokeStyle = t.rgbToRgba(t.rainColor)),
                        t.ctx.lineWidth = t.rainWidth;
                    for (var i = 0; i < t.numParticles; i++) {
                        var p = t.particles[i];
                        t.ctx.beginPath(),
                            t.ctx.moveTo(p.x, p.y),
                            t.ctx.lineTo(p.x, p.y + p.length),
                            t.ctx.stroke();
                    }
                    t.updateRain();
                }, this.interval);
            }),
            (i.updateRain = function () {
                for (var t = 0; t < this.numParticles; t++) {
                    var p = this.particles[t];
                    p.y > this.H + p.length
                        ? ((this.particles[t] = {
                            x: Math.random() * this.W,
                            y: -p.length,
                            length: p.length,
                            speed: p.speed,
                        }),
                            (p.x = Math.random() * this.W))
                        : (p.y += p.speed);
                }
            }),
            t
        );
    })();
})();
