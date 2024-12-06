function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.d = f0;
}
new F1();
const v4 = new F1();
new F1();
const v8 = new Float32Array(789);
new Int8Array(4065);
new Uint16Array(195);
switch (v8) {
    default:
        new Date();
        break;
}
v4.d &= v8.byteLength;
