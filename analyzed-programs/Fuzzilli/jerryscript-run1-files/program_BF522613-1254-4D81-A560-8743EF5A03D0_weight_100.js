function f0() {
    const o7 = {
        "g": "128",
        __proto__: "GoAtl",
        ["boolean"]: "128",
        ..."boolean",
        1609666970: "boolean",
        "d": "128",
        get b() {
            const t9 = "128";
            delete t9[this];
            function f6() {
                return this;
            }
            return f6;
        },
    };
    return o7;
}
f0();
const v9 = f0();
const v10 = f0();
class C11 {
    constructor(a13) {
        f0();
    }
    b = v10;
    8;
    static a;
    static #a;
    a;
    static [v10] = f0;
}
const v18 = new C11(v10);
const v19 = new C11(v9);
const v20 = new C11(v9);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a24;
    this.c = f0;
    this.b = v9;
}
new F21(v18, v20);
const v26 = new F21(v20, v19);
const v27 = new F21(v18, v18);
Object.defineProperty(v27, v19, { writable: true, enumerable: true, get: f0 });
const v28 = v18 != v9;
const v29 = v9 < v26;
if (v29) {
    C11[v29] = v28;
} else {
    throw v29;
}
