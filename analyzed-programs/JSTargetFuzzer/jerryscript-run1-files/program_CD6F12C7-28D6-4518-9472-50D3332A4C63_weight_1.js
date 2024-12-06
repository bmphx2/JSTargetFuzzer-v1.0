function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -46446;
    this.f = -46446;
    this.c = -46446;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [-7.4105219514703835,-687077.9460787796,5.5632750866136895,590.1917957582264,-832645.1208091204];
const v7 = [-2.0,-789.700357843178];
const v8 = [0.013641407898033364,0.19225796334764944,1e-15,-5.0,NaN,3.0,Infinity,-3.226965832540536];
function f9(a10, a11) {
    const o18 = {
        toString(a13, a14, a15) {
            a15 = v3;
            let v16;
            try { v16 = a15(a11, a13, this, v5); } catch (e) {}
            a14[v16];
            return a14;
        },
        __proto__: a10,
        "d": a10,
        [v3]: a10,
        "h": v6,
        "f": v4,
        "c": F0,
        [a11]: a11,
    };
    return a10;
}
f9(v3, v7);
f9(f9(v4, v8), v7);
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v7;
    this.a = F0;
}
new F22(v5, v7, v6);
new F22(v5, v6, v7);
new F22(v5, v6, v7);
v8.includes(Array(257), 257);
