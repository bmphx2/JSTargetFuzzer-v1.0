function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a11;
    this.h = 536870887;
    this.e = -1073741824;
}
const v13 = new F9(-1000000000000.0, 0.7543520008584917);
const v14 = new F9(v13, 3.5495837103940566);
new F9(0.7543520008584917, 3.5495837103940566);
function* f16(a17, a18, a19) {
    v13[a19];
    return yield a17;
}
const v22 = f16(-1000000000000.0, v14, 0.7543520008584917);
v22.g;
try { v22.next(v13); } catch (e) {}
Object.defineProperty(v13, v14, { configurable: true, get: f16 });
const o27 = {
    "maxByteLength": 1867,
};
const v29 = new ArrayBuffer(1867, o27);
new DataView(v29);
