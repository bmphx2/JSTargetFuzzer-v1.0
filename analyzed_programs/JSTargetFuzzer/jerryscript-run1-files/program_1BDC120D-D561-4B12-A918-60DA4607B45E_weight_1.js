function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -9223372036854775807;
    this.c = -9223372036854775807;
}
const v3 = new F0();
new F0(v3, v3);
new F0();
new Uint16Array(16);
new Uint8Array(309);
new Float64Array(3);
try { null.set(); } catch (e) {}
