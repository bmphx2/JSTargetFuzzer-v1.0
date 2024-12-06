function f0() {
    const o6 = {
        "e": -607602.8540873653,
        4096: "valueOf",
        [-607602.8540873653]: "c",
        __proto__: "valueOf",
        3: -607602.8540873653,
        get a() {
            let v5;
            try { v5 = ("c").charAt(-607602.8540873653); } catch (e) {}
            const t10 = "c";
            t10.a = v5;
            return v5;
        },
        "c": -607602.8540873653,
        ["c"]: "c",
    };
    return o6;
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
function f10(a11, a12) {
    const o21 = {
        ...a12,
        [v8](a14, a15) {
            super.a;
            [-797871112,1073741824];
            [-1];
            [2140520188,44774,-4096,45830,-13];
            return a15?.h;
        },
        __proto__: v9,
        ...v9,
        ...v9,
    };
    return o21;
}
const v22 = f10(v9, v8);
const v23 = f10(v22, v8);
const v24 = f10(v23, v9);
class C25 extends f0 {
    536870888;
    static #o(a27, a28, a29, a30) {
        a30[8] = a29;
        return -11;
    }
    #b;
    static 197;
    c = v7;
    a = v22;
}
new C25();
new C25();
new C25();
const v40 = 1.791823489513404e+308 < v24;
if (v40) {
    const o41 = {
        "deleteProperty": f0,
        "has": f0,
        "ownKeys": f0,
        "preventExtensions": f10,
        "set": f10,
    };
    new Proxy(v23, o41);
} else {
    v9[Symbol.split] = v40;
}
