new Float32Array(128);
new Int32Array(9);
const v8 = new Int8Array(0);
new Float32Array(5);
new Uint32Array(9);
new Float64Array(5);
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v8;
}
const v23 = new F18(5, 9, 9);
new F18(128, 128, 128);
new F18(9, 128, 0);
try { F18(9, 9, 5); } catch (e) {}
const o27 = {
};
new Proxy(v23, o27);
