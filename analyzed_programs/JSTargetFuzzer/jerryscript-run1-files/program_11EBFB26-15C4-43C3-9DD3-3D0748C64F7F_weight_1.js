new Uint16Array(3889);
new Float32Array(Float32Array);
new Uint8Array(128);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a11.g = 10;
    this.f = a12;
}
new F9(128, 3889);
new F9(128, 3889);
new F9(3889, 3889);
const v17 = new Set();
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try { v17.forEach(a21, v17); } catch (e) {}
}
new F18();
