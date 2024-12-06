function f2(a3, a4) {
    const o5 = {
    };
    return o5;
}
const v6 = f2();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v6, 64n, { configurable: true, enumerable: true, get: f2 });
}
const v9 = [9007199254740992n,-5n,9007199254740992n,9007199254740992n];
const v10 = [-1073741824n];
const v11 = [v10,v9];
new WeakSet();
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a18;
    this.b = -5n;
    this.f = a18;
}
new F14(-5n, v11, v10, 9007199254740992n);
new F14(-1073741824n, v10, F14, -1073741824n);
new F14(-1073741824n, WeakSet, F14, -1073741824n);
const v25 = new Float64Array(128);
v25[1].__proto__;
