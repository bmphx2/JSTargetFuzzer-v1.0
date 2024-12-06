function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4294967295;
    this.e = -4294967295;
}
const v3 = new F0();
new F0();
let v5 = new F0();
let v6 = ++v5;
--v6 == 5n;
const v12 = new ArrayBuffer(10);
new Int8Array(v12);
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v5;
}
new F16(v3);
new F16(v3);
new F16(v5);
const o30 = {
    toString(a24, a25, a26, a27) {
        return Proxy();
    },
};
async function f31(a32, a33) {
    1073741823 * o30;
    return a32;
}
f31();
new Int32Array(172);
new Int8Array(1000);
new Int8Array(129);
const v47 = new Int8Array(2);
const v50 = new BigUint64Array(300);
const o51 = {
    ...v50,
    [v47]: 2,
};
try { o51.getFloat32(); } catch (e) {}
