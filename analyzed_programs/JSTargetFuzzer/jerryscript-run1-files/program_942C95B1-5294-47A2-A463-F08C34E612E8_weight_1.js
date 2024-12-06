const v2 = new Float32Array(10);
function f3() {
    return v2;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
    this.c = 10;
}
new F4(Float32Array);
new F4(f3);
new F4(10);
new BigUint64Array(0);
const v15 = new Int8Array(3711);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a20;
}
class C22 extends F16 {
}
new Date();
function f25() {
    return f25;
}
f25();
[f25];
const v28 = new F16(Int8Array, v15, 3711, 0);
const v29 = new F16(v15, v28, 3711, 10);
new F16(v29, 0, 3711, 3711);
function f32() {
    return f32;
}
function f33(a34) {
    const o35 = {
    };
    return o35;
}
const v36 = f33();
async function f37(a38, a39, a40) {
    const v42 = `
        Object.defineProperty(v36, "a", { writable: true, configurable: true, get: f32 });
        const v43 = f33 % 31874;
        +v43;
        -9223372036854775807 * v43;
    `;
    eval(eval);
    return eval;
}
f37();
