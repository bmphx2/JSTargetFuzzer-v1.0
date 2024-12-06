new Uint32Array(Uint32Array);
new Uint16Array(512);
new Int8Array(Uint32Array);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 512;
    this.f = 13;
    this.d = a11;
}
new F9(512, 13);
new F9(512, 512);
new F9(13, 13);
const v16 = [];
try { v16.map(Uint16Array, v16); } catch (e) {}
