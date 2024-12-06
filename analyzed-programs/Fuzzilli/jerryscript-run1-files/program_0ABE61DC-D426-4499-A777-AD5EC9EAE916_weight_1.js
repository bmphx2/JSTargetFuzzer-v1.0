function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.d = a5;
    this.h = 1073741824;
}
const v7 = new F3(1073741824, 1073741824);
const v8 = new F3(4467, 4467);
new F3(4467, 1073741824);
function f10(a11, a12) {
    const o18 = {
        "f": 1073741824,
        "b": 4467,
        [a11]: 536870889,
        set a(a14) {
            let v13 = this;
            v13 = a14;
            super.a = a12;
            throw -57463;
        },
        "a": a11,
        ...v7,
        __proto__: v8,
    };
    return o18;
}
const v19 = f10(536870889, f10);
f10(536870889, 536870889);
f10(1073741824, v19);
class C22 {
    static #o(a24, a25, a26) {
        const o27 = {
            "apply": f10,
            "call": f10,
            "defineProperty": f10,
            "get": f10,
            "getOwnPropertyDescriptor": f10,
            "getPrototypeOf": f10,
            "has": f10,
            "isExtensible": f10,
            "preventExtensions": f10,
            "set": f10,
        };
        new Proxy(this, o27);
        return o27;
    }
}
new C22();
new C22();
new C22();
let v33 = 0;
do {
    new Set();
    v33++;
} while (v33 < 4)
