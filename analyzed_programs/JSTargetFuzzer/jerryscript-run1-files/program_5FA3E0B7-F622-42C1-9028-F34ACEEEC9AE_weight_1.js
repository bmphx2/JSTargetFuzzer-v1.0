function f0() {
}
function f1() {
    return f0;
}
const v4 = new Uint8Array(255);
const v7 = new Uint16Array(8);
new Uint16Array(8);
const v11 = v4[8];
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a15;
    this.c = a16;
}
new F12(8, 255, 8);
const v18 = new F12(8, 255, 255);
new F12(8, 255, 8);
v18[8] = v7;
v7[F12] = v11;
