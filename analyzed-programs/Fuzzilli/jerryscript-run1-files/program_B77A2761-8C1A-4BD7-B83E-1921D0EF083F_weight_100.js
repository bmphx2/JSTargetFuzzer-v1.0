function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4096;
    this.h = 4096;
    this.e = 4096;
}
new F0();
new F0();
const v5 = new F0();
function f6() {
    return v5;
}
new Uint16Array(512);
new Int16Array(176);
new Int32Array(256);
f6 = F0;
