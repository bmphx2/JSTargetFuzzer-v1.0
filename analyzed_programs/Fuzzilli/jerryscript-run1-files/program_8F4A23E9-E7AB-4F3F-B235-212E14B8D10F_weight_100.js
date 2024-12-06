function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
    this.h = f0;
    this.g = f0;
}
new F4(f0);
const v8 = new F4(65535n, 536870887n, 536870887n, F4);
new F4(v8, v8, v8);
new Map();
new WeakSet();
let v17 = -1804912733;
++v17 - WeakSet;
const v22 = new Int32Array(129);
const v26 = [1547];
Reflect.apply(("EvC5").padStart, v22, v26);
