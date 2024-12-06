function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -1024;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new Set();
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a12;
    this.c = Set;
}
const v14 = new F8(v4, v4, v5, v5);
const v15 = new F8(v4, v4, v14, v14);
new F8(v4, v15, v5, v5);
class C20 extends Set {
    f = v15;
    get c() {
        return 47006n;
    }
    h = v5;
    set d(a26) {
        new Uint8Array(10);
        new Uint8ClampedArray(7);
        new Int32Array(9);
    }
}
const v36 = new C20();
new C20();
new C20();
let v39 = 10;
for (; v39--;) {
    let v44;
    try {
    const t0 = -1000000.0;
    v44 = t0(v15, v36, v36);
    } catch (e) {}
    try { v44.setTime(v44, v44, v4); } catch (e) {}
}
