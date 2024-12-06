function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
    this.f = 11n;
}
new F9(-14, 2825);
new F9(10000, 11n);
new F9(2825, -14);
const v18 = new Uint32Array(181);
let v20 = BigUint64Array;
let v21 = new v20(1);
let v22 = 253;
[v22,,v20,v21] = v18;
try { v20["abs"](181, v22, v20); } catch (e) {}
new Uint16Array(10000);
for (let i35 = 0; i35 < 2; i35++) {
    const v41 = new Function("x");
    v41.name;
}
Function();
