function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "imul";
    this.b = a5;
}
const v7 = new F3("imul", "imul");
for (let i9 = 0; i9 < 4; i9++) {
    try { i9(...F3, i9, i9, v7, i9, i9); } catch (e) {}
}
const v16 = new F3("cbrt", "imul");
const v17 = new F3(F3, "cbrt");
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "1073741823";
    this.f = v16;
}
const v26 = new F21("1073741823", v17, v17);
new F21("cbrt", v7, v16);
new F21("imul", v7, v26);
const v30 = new WeakMap();
const v32 = new Map();
function f33() {
    return f33;
}
const v36 = new Int32Array(134);
new Uint8Array(4096);
const v41 = new Uint32Array();
v41 >= v30;
v36.join(v32);
