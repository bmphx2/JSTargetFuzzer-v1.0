function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 6123;
}
const v3 = new F0();
const v4 = new F0(F0, v3, v3);
new F0();
v4[0];
new Uint16Array(0, F0, v4);
new Uint32Array(2840);
new Uint8ClampedArray(129);
function F22(a24) {
    if (!new.target) { throw 'must be called with new'; }
}
switch (16) {
    case F22:
        break;
    default:
        break;
}
