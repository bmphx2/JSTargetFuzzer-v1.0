const v1 = new WeakSet();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = WeakSet;
    this.h = a4;
    v1.f = a4;
}
const v5 = new F2(WeakSet);
let v6 = new F2(v5);
const v7 = new F2(v6);
const v9 = [v1];
Reflect.apply(v1.delete, v1, v9);
v6 = v5;
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a20;
    this.f = a20;
    this.d = a18;
}
new F15(v1, v5, -1000000000000.0, F2);
new F15(v7, v7, 411.115580137327, v1);
const v23 = new F15(WeakSet, v7, -1000000000000.0, v5);
const o25 = {
};
new Proxy(Int16Array, o25);
new Uint8Array(v23);
