function f0() {
}
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
    this.f = -6;
}
const v13 = new F7("isSealed", 7720, 7720, "isSealed");
const v14 = new F7("a", f0, 128, "p");
const v15 = new F7("a", 7720, -6, "a");
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a20;
    this.h = v15;
    this.d = a18;
}
new F16(v13, -6, "p", v13);
new F16(v14, 7720, "a", v13);
const v24 = new F16(v15, 128, "isSealed", v15);
v24 - v14;
async function f26(a27, a28, a29, a30) {
    await 536870889n;
    return 536870889n;
}
f26(7720, 7720, 128, "a") || v24;
