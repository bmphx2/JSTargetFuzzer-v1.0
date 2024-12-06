function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4294967295;
    this.e = 4294967295;
    this.b = 4294967295;
}
const v3 = new F0();
new F0();
new F0();
const v6 = [-3495,1,-4096,-1031871925,536870887,-4294967296,11,617782193];
const v7 = [-9007199254740992,-9223372036854775807,595404647,1971371440,1273036696,1024,4,-2021499413];
const v8 = [7,1073741823,64,23897];
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v8;
    this.f = a13;
}
const v14 = new F9(F0, v7, v8);
new F9(v14, F0, v7);
new F9(v8, v3, v6);
function f17() {
    return v7;
}
[[v7,f17,v3,F9]];
[F9,v8];
const v23 = new Uint32Array(181);
let v25 = BigUint64Array;
let v26 = new v25(1);
let v27 = 253;
[v27,,v25,v26] = v23;
try { v25["abs"](181, v27, v25); } catch (e) {}
new Uint16Array(v27);
for (let i40 = 0; i40 < 2; i40++) {
    const v46 = new Function("x");
    v46.name;
}
Function();
