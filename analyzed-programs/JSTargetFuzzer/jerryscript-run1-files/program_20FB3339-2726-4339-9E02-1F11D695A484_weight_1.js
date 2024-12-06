new Float64Array(256);
const v5 = new Int32Array(129);
const v8 = new Float32Array(7);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 7;
}
const v17 = new F12(256, v8, F12);
const v18 = new F12(v5, v5, v17);
new F12(v18, v5, "-1024");
const v22 = new Int8Array(129);
try { v22.findIndex(Uint32Array); } catch (e) {}
const v26 = Symbol.toPrimitive;
const o31 = {
    [v26]() {
        return 129;
    },
};
