const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a4;
}
let v6 = new F2(v1, v1);
const v7 = new F2(F2, F2);
const v8 = new F2(v7, F2);
let v15 = 0;
while (v15 < 10) {
    const v18 = --v6;
    try { v7.every(v18, v15, v18); } catch (e) {}
    v15++;
}
v8.g &= -5;
