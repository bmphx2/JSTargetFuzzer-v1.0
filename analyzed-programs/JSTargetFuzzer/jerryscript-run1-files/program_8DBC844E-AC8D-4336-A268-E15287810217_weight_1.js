const v8 = new Uint8ClampedArray();
const v11 = [v8,[v8]];
v11.splice(v8, ...v11, 3);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -536870912;
}
new F13(null, -1812600335, -1812600335);
new F13(-536870912, -1161474586, -1161474586);
new F13(-536870912, -536870912, -1161474586);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v24 = new F21();
const v25 = new F21();
function f26(a27, a28) {
    const o34 = {
        ...v25,
        __proto__: v24,
        m(a30, a31, a32, a33) {
            return this;
        },
    };
    return o34;
}
f26();
for (const v36 in -1161474586) {
    f26().d;
    v25[Symbol.unscopables] = v25;
}
