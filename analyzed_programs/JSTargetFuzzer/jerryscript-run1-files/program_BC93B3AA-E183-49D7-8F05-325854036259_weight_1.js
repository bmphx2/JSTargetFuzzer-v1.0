function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1967;
    this.e = 1967;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.byteLength = 512;
    this.c = a11;
}
new F9(512, v5);
const v14 = new F9(1839778588, v3);
new F9(v14, v5, v14);
async function f19(a20, a21, a22) {
    JSON.parse(a20);
    return f19;
}
f19(f19, 1839778588, f19);
