new Date();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    this.g = a5;
}
const v6 = new F3(true);
const v7 = new F3(v6);
new F3(true);
new Uint8Array(3682);
new Uint32Array(2085);
new Float32Array(3);
const v21 = new Uint32Array(181);
let v23 = BigUint64Array;
let v24 = new v23(1);
let v25 = 253;
[v25,,v23,v24] = v21;
try { v23["abs"](181, v25, v23); } catch (e) {}
new Uint16Array(v25);
for (let i38 = 0; i38 < 2; i38++) {
    const v44 = new Function("x");
    v44.name;
}
Function();
function f47(a48, a49) {
    const o50 = {
        ...v23,
        "e": a48,
        [v7]: v23,
    };
    return o50;
}
f47("x", "abs");
f47("xX7QN", v25);
f47(v25, "x");
