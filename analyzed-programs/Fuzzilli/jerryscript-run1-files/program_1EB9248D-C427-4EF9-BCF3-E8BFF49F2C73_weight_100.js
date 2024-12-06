function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 65536;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a9;
    this.a = a9;
    this.d = F0;
}
const v10 = new F6(v5, v3);
const v11 = new F6(v10, v4);
new F6(v10, v3);
[4,-65537,2,-9,2147483649,-12,1073741823,536870912,9,268435456];
[-5,-5,-34659,-5,52680,10000,64];
536870912 <= [-1];
v11[4096] = v10;
const o22 = {
    "maxByteLength": 2315849464,
};
const v24 = new ArrayBuffer(255, o22);
new Int8Array(v24);
