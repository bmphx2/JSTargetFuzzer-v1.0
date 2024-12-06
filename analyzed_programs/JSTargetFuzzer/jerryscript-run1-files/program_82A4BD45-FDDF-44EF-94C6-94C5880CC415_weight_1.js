function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a9;
    a9.e = 0.45081396444809185;
    a9.f = a8;
}
new F6(0.45081396444809185, 9007199254740992n);
const v11 = new F6(0.45081396444809185, 34705n);
const v12 = new F6(0.06309228337118344, 9007199254740992n);
try {
    886.0009926550579 ** 3296n;
} catch(e16) {
}
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a19;
}
const v21 = new F17(v12, 1000.0);
new F17(v11, 1000.0);
const v23 = new F17(v21, 0.45081396444809185);
const v25 = [-9223372036854775807];
function f27() {
    return f27;
}
const v28 = f27(v23, 16, -9223372036854775807);
const o29 = {
    "defineProperty": v28,
};
const v31 = new Proxy(v25, o29);
for (let v32 = 0; v32 < 5; v32++) {
    Object.defineProperty(v31, v32, { writable: true, configurable: true, enumerable: true, value: 16 });
}
