const v0 = [];
const v2 = new WeakSet();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.e = a5;
    this.g = WeakSet;
}
const v6 = new F3(F3);
const v7 = new F3(v6);
const v8 = new F3(WeakSet);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
}
new F9(v6, v7);
new F9(v8, v7);
const v15 = new F9(v7, v6);
v15.b = v15;
const v18 = [WeakSet];
let v20 = Reflect.apply(v2.add, v0, v18);
v7.length = 0;
v20 = F3;
const o22 = {
    "construct": placeholder,
    "deleteProperty": placeholder,
    "set": placeholder,
    "setPrototypeOf": placeholder,
};
new Proxy(v0, o22);
