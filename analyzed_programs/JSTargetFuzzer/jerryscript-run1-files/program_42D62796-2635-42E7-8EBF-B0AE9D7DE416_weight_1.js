function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a9;
    a9.e = 0.45081396444809185;
    a9.f = a8;
}
new F6(0.45081396444809185, 9007199254740992n);
const v11 = new F6(0.45081396444809185, 34705n);
const v12 = new F6(0.06309228337118344, 9007199254740992n);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a15;
}
const v17 = new F13(v12, 1000.0);
new F13(v11, 1000.0);
const v19 = new F13(v17, 0.45081396444809185);
const v21 = [-9223372036854775807];
function f23() {
    return f23;
}
const v24 = f23(v19, 16, -9223372036854775807);
const o25 = {
    "defineProperty": v24,
};
const v27 = new Proxy(v21, o25);
for (let v28 = 0; v28 < 5; v28++) {
    Object.defineProperty(v27, v28, { writable: true, configurable: true, enumerable: true, value: 16 });
}
