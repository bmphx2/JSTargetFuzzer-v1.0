function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2();
const v10 = new Int8Array(6);
const v13 = [v10[4]];
Reflect.apply(Date.parse, v7, v13);
[-1000.0,-0.0,0.0,-4.0,4.0,-1.0,2.2250738585072014e-308];
[3.0];
[1000000.0,-0.0,0.9589557032812003,-807455.659416324];
new Uint8Array(127);
new Uint8ClampedArray(3443);
new BigUint64Array(64);
const v32 = new Uint32Array(181);
let v34 = BigUint64Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
try { v34["abs"](181, v36, v34); } catch (e) {}
new Uint16Array(v36);
for (let i49 = 0; i49 < 2; i49++) {
    const v55 = new Function("x");
    v55.name;
}
Function();
