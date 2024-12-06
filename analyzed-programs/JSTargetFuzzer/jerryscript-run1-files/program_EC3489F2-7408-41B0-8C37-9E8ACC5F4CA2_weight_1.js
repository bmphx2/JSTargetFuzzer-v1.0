function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = F1;
    this.e = F1;
    this.g = f0;
}
new F1();
new F1();
new F1();
new Uint32Array(4096);
new Uint32Array(4096);
new Uint16Array(1354);
const v20 = new Int8Array(107);
for (let v21 = 0; v21 < 5; v21++) {
    v20.indexOf(v21);
}
