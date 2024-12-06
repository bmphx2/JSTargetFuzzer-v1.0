function f1() {
    return undefined;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F4(F4, F4);
function f9() {
    return v8;
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    a14 - a14;
}
new F10(f9, v8, 4096n);
const v26 = new WeakMap();
new Int8Array(v26);
