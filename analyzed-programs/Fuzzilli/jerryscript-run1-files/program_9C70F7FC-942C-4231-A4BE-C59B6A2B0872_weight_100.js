const v7 = new WeakSet();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4;
    this.a = v7;
    this.g = -5.0;
}
new F8(-5.0, 1000000.0);
new F8(1000000.0, 1000000.0);
new F8(-5.0, -5.0);
let v15 = -4294967296;
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a24;
    this.f = a23;
}
new F21(-45331, -45331);
const v26 = new F21(64, 64, 5, 5);
new F21(5, 5);
new Uint8Array(3);
v15++;
const v37 = [-1.6993083653083437e+308,280483.095601148,2.0,-0.23025758266632224];
function F38(a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    v37.f = a41;
}
new F38(F38, v37);
new Int8Array(0);
new Float64Array(905);
const v52 = new Uint8ClampedArray(2560);
function F53(a55, a56, a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v52;
    this.h = 0;
}
const v59 = new F53(0, 2560, 2560, 905);
const v60 = new F53(v59, 905, 905, 2560);
new F53(v52, 905, 905, 905, v26, 1627782897n, v60);
for (let v62 = 0; v62 < 22; v62++) {
    Math.trunc(-5);
    -88799.37103329285 * v62;
    Math.expm1(16);
    -5 / 905;
    (-5 >>> -88799.37103329285) / 905;
}
