function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
}
new F9(1073741823, 612579374);
new F9(-1458597826, -9223372036854775808);
new F9(-9223372036854775808, -1458597826);
new WeakSet();
const v20 = new Uint32Array(181);
let v22 = BigUint64Array;
let v23 = new v22(1);
let v24 = 253;
[v24,,v22,v23] = v20;
try { v22["abs"](181, v24, v22); } catch (e) {}
new Uint16Array(v24);
new Boolean();
for (let i39 = 0; i39 < 2; i39++) {
    const v45 = new Function("x");
    v45.name;
}
Function();
