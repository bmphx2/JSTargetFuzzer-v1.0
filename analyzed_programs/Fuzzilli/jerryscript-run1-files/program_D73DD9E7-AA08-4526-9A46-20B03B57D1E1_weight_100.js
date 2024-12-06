function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -16;
}
const v3 = new F0();
new F0();
new F0();
new Float32Array(94);
new Uint8Array(1024);
new Uint16Array(15);
v3 ^ 1;
let v19 = 1 * v3;
Math.sin(v19);
--v19;
