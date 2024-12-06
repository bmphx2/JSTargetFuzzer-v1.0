function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 256;
}
new F0();
new F0();
const v5 = new F0();
new Array(0);
function f12() {
    return v5;
}
function f13() {
    return v5;
}
const v16 = new Uint16Array(3560, 9);
const v17 = v16[8];
v17["valueOf"]("valueOf", -4294967296, v17);
