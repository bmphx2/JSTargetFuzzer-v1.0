function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1000;
}
new F0();
new F0();
new F0();
new Map();
let v8 = -9007199254740992n;
const v9 = [8];
function f10(a11, a12) {
    v8 %= 51351n;
    return a12;
}
v9["forEach"](f10);
new Uint8Array(10);
new Float64Array(1447);
new Uint32Array(6);
const v27 = new Uint32Array(181);
let v29 = BigUint64Array;
let v30 = new v29(1);
let v31 = 253;
[v31,,v29,v30] = v27;
try { v29["abs"](181, v31, v29); } catch (e) {}
new Uint16Array(v31);
for (let i44 = 0; i44 < 2; i44++) {
    const v50 = new Function("x");
    v50.name;
}
Function();
