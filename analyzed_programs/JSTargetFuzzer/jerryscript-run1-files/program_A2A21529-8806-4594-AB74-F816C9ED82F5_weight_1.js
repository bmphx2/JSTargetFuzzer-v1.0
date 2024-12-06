function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a7;
    this.a = a6;
    this.f = f0;
}
new F4(12131, 268435456);
new F4(-5, 12131);
new F4(12131, -5);
new Uint8Array(255);
new Int8Array(2337);
new Uint32Array(1559);
const v22 = new Int8Array(12);
v22.byteLength *= 985;
