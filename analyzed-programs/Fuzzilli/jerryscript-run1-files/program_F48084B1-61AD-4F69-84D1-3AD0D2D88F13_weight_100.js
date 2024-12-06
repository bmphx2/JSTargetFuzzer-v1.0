function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
    this.h = f0;
    this.g = f0;
}
new F4(f0);
const v8 = new F4(65535n, 536870887n, 1797470782n, F4);
new F4(v8, v8, v8);
new Map();
const v16 = new WeakSet();
let v17 = -1804912733;
++v17 - v16;
