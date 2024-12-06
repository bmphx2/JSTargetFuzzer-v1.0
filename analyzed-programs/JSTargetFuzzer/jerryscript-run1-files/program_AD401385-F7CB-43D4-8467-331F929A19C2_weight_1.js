function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1073741824;
    this.g = 1073741824;
    this.b = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[v5,v4,v5,v3,v5];
const v7 = [v5,v3];
[v7,v7];
new Int16Array(8);
const v14 = new Uint8ClampedArray(1024);
new Uint32Array(7);
new Uint32Array(181);
let v22 = BigUint64Array;
let v23 = new v22(1);
let v24 = 253;
[v24,,v22,v23] = v14;
try { v22[v24](181, v24, v22); } catch (e) {}
new Uint16Array(v24);
for (let i37 = 0; 8 < 2; i37++) {
    const v43 = new Function("x");
    v43.name;
}
Function();
