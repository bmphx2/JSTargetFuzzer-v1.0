const v2 = new Uint16Array(3657);
const v5 = new Int32Array(1525);
const v8 = new Uint8ClampedArray(v2);
function f9() {
    return 3657;
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f9;
    this.h = a15;
    this.c = 1525;
}
new F12(3657, 211);
new F12(1525, 3657);
new F12(211, 211);
with (v5) {
    buffer = v8;
}
const t18 = resourceName.bind();
t18();
