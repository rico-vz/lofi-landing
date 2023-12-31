var LetItSnow = (function () {
    "use strict";
    return (function () {
        function t(t) {
            Object.assign(this, t),
                (this.angle = 0),
                (this.partivles = []),
                this.canvas(),
                this.resWin(),
                (this.canvas = document.getElementById("canvas")),
                (this.ctx = this.canvas.getContext("2d")),
                this.getWid();
            for (var i = 0; i < this.ns; i++)
                this.partivles.push({
                    x: Math.random() * this.W,
                    y: Math.random() * this.H,
                    r: Math.random() * this.radius + 1,
                    d: Math.random() * this.ns,
                });
            this.drowSF();
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
                        "position: fixed; top: 0; pointer-events: none;",
                    ),
                    document.body.appendChild(t);
            }),
            (i.resWin = function () {
                var t = this;
                window.addEventListener("resize", function () {
                    t.getWid();
                });
            }),
            (i.h2r = function (t) {
                var i = t.substring(1, 7);
                return (
                    parseInt(i.substring(0, 2), 16) +
                    ", " +
                    parseInt(i.substring(2, 4), 16) +
                    ", " +
                    parseInt(i.substring(4, 6), 16)
                );
            }),
            (i.drowSF = function () {
                var t = this;
                setInterval(function () {
                    t.ctx.clearRect(0, 0, t.W, t.H),
                        (t.ctx.fillStyle =
                            "rgba(" + t.h2r(t.snowColor) + "," + t.snowOpacity + ")"),
                        t.ctx.beginPath();
                    for (var i = 0; i < t.ns; i++) {
                        var s = t.partivles[i];
                        t.ctx.moveTo(s.x, s.y),
                            t.ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI, !0);
                    }
                    t.ctx.fill(), t.updateSF();
                }, this.interval);
            }),
            (i.updateSF = function () {
                this.angle += 0.01;
                for (var t = 0; t < this.ns; t++) {
                    var i = this.partivles[t];
                    (i.y += Math.cos(this.angle + i.d) + 1 + i.r / 2),
                        (i.x += 2 * Math.sin(this.angle)),
                        (i.x > this.W + 5 || i.x < -5 || i.y > this.H) &&
                        (t % 3 > 0
                            ? (this.partivles[t] = {
                                x: Math.random() * this.W,
                                y: -10,
                                r: i.r,
                                d: i.d,
                            })
                            : Math.sin(this.angle) > 0
                                ? (this.partivles[t] = {
                                    x: -5,
                                    y: Math.random() * this.H,
                                    r: i.r,
                                    d: i.d,
                                })
                                : (this.partivles[t] = {
                                    x: this.W + 5,
                                    y: Math.random() * this.H,
                                    r: i.r,
                                    d: i.d,
                                }));
                }
            }),
            t
        );
    })();
})();
