function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v3;
    try { v3 = this.valueOf(-8, -8); } catch (e) {}
    for (let v5 = 0; v5 < 32; v5++) {
        v3["p" + v5] = v5;
    }
    this.e = -8;
}
const v8 = new F0();
new F0();
const v10 = new F0();
const v16 = [5n,v8,-2022065433n];
[4];
[v8,F0,5n,5n,F0];
new Int16Array(4);
let v20 = 1000;
new Int8Array(v20);
v20 = 3653;
v8[268435439] = v10;
v16 - v10;
v8[4] /= 4;
const o27 = {
    "maxByteLength": 1017937220,
};
const v29 = new ArrayBuffer(4096, o27);
new Int16Array(v29);
new Int8Array(3653);
let v34 = -4294967297n;
v34 &= v34;
