const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a4;
}
new F2(F2, F2);
const v7 = new F2(F2, F2);
new F2(WeakMap, v7);
const v10 = new Date();
function f11() {
    return v10;
}
f11 = Date;
const v20 = [v7];
Reflect.apply(v1.get, v1, v20);
Math.max(WeakMap);
Math.asinh(WeakMap);
Math.acos(WeakMap | Date);
