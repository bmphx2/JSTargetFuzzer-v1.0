function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
    this.c = -2;
}
new F4(-2);
new F4(-2);
new F4(-1317874654);
new Int8Array(2815);
new Int8Array(16);
new Float64Array(6);
const v21 = new Uint32Array(181);
let v23 = Int16Array;
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
