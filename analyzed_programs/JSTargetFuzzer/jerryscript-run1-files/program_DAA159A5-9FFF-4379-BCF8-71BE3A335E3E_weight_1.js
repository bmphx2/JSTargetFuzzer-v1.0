const v0 = [1000.0,914535.0367997754,-1.116815542633651e+308,-862881.2993238299,-92658.21811464243,394348.34018725785,0.8430286252269799,-1.328101231248855e+308];
const v1 = [722676.7365386763,0.9379207048804802];
const v2 = [1.0024978813140788e+308,1.7115841688963009e+308,5.0,-43.19759705236686,NaN,-2.0,-4.591195641370051,-262738.98753478855,-0.8291477002061001];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    this.d = v1;
    this.h = a5;
}
new F3(v1);
const v7 = new F3(v1);
const v8 = new F3(v1);
function f9(a10, a11, a12, a13) {
    const o23 = {
        "g": a10,
        "b": a13,
        "d": v8,
        "f": v1,
        "a": v7,
        __proto__: a10,
        ...a13,
        "h": a10,
        set c(a15) {
            let v19 = -1.4067784458737445e+308;
            const v20 = v19 + v19;
            v19++;
            Math.cosh(v20);
        },
    };
    return o23;
}
const v25 = f9(v1, f9(v2, F3, v0, v2), v1, v1);
let v26 = f9(v2, v25, v0, v0);
v26 %= v8;
const v27 = v2[1073741824];
try { v27(v27, v8, v7, v25); } catch (e) {}
v25.__proto__ = v2;
v1 >> v8;
const v35 = new Array(10);
let v37 = 4096;
function f39(a40, a41, a42, a43) {
    const o44 = {
        ...a43,
    };
    return o44;
}
let v45 = f39(v37, -1, 129, v35);
const t47 = f39(10, -1, 10, f39, v7);
t47.f = v26;
new BigUint64Array(8);
new Uint8ClampedArray(1000);
new Int32Array(7);
f39(v45, v37, -1, v37);
v45.g;
try {
    let v58;
    try { v58 = v45.isSealed(); } catch (e) {}
    v45 = v58;
    v37 = v58;
} catch(e59) {
    e59[0] = e59;
    try { e59(Array); } catch (e) {}
}
