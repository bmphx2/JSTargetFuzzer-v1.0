function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 268435439;
    this.f = 268435439;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v5,v3];
const v7 = [F0,v4,v4];
const v8 = [v7,v3];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
}
new F12(-9007199254740990, v7, 15443, 15443);
new F12(-9007199254740990, v8, 268435456, 268435456);
const v20 = new F12(268435456, v6, 268435456, 15443);
const v23 = new Uint32Array(181);
let v25 = BigUint64Array;
let v26 = new v25(1);
let v27 = 253;
[v27,,v25,v26] = v23;
let v29;
try { v29 = v25["abs"](181, v27, v25); } catch (e) {}
(v29 + v27) >>> 1;
const v34 = v23[8];
v6.length;
v20.toString = v34;
new Uint16Array(v27);
for (let i44 = 0; i44 < 2; i44++) {
    const v50 = new Function("x");
    v50.name;
}
Function();
