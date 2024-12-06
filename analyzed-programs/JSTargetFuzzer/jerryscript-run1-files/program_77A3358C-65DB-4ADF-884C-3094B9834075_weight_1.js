function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1(v3);
try { v4.o(); } catch (e) {}
const v9 = [4,1248189579,-1661274843,7278];
[1024,4294967295,-256,-14,4];
const v11 = [7339,9,1073741824];
v11[268435456];
const o14 = {
};
new Proxy(F1, o14);
for (let v17 = 0; v17 < 32; v17++) {
    v11["p" + v17] = v17;
}
for (const v24 in v9) {
    new BigUint64Array(5);
    new BigInt64Array(9);
    new Uint8Array(129);
}
class C36 {
    [4];
    [-1];
    [536870912];
    [536870912] = 64;
}
