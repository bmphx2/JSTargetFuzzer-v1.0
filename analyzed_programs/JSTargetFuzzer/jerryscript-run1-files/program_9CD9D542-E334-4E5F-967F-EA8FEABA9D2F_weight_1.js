new Int8Array(8);
const v5 = new Float64Array(512);
new Uint16Array(103);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v5;
    this.c = a12;
}
new F9(103, 512);
new F9(512, 8);
new F9(103, 8);
const v18 = new Int8Array(2);
const v21 = new BigUint64Array(2);
const o22 = {
    ...v21,
    [v18]: 2,
};
try { o22.getFloat32(); } catch (e) {}
