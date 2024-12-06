const v7 = new Set();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a10;
    this.c = a11;
}
const v13 = new F8(v7, -2.0, 0.777704033027766);
new F8(v13, 0.777704033027766, -2.0);
const v15 = new F8(16342, 0.777704033027766, 0.900496035140737);
with (v15) {
    g = v13;
    let v16 = 536870887 in v15;
    v16 >>>= v16;
    -16342;
    let v22 = ~v16;
    ++v22;
    NaN ^ v22;
}
