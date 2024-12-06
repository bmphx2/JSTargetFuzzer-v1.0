function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0.c = -4294967297;
}
const v3 = new F0();
new F0();
new F0();
function f9() {
    return v3;
}
new Float64Array(16);
new Int16Array(26);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e25) {
} finally {
}
