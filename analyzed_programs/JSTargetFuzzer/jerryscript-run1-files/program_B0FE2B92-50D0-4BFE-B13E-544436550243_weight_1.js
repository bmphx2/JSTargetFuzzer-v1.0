function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.E = -65535;
}
new F0(F0);
new F0();
new F0();
function f12() {
    return 11;
}
const v15 = new Float32Array(512);
new Int32Array(2);
new Float32Array(1506, v15);
try { DataView.push(); } catch (e) {}
