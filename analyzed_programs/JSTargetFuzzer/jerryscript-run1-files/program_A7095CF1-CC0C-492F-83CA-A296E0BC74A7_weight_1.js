function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -536870912;
}
new F7(null, -1812600335, -1812600335);
new F7(-536870912, -1161474586, -1161474586);
new F7(-536870912, -536870912, -1161474586);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v18 = new F15();
const v19 = new F15();
function f20(a21, a22) {
    const o28 = {
        ...v19,
        __proto__: v18,
        m(a24, a25, a26, a27) {
            return this;
        },
    };
    return o28;
}
f20();
for (const v30 in -1161474586) {
    f20().d;
    v19[Symbol.unscopables] = v19;
}
