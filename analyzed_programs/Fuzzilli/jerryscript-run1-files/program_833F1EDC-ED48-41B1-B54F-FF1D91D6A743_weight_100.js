class C3 {
    static {
        const o7 = {
            "maxByteLength": 7,
        };
        const v9 = new ArrayBuffer(2, o7);
        new Uint8ClampedArray(v9);
    }
    f;
    static ["f"] = "symbol";
    static 9;
}
new C3();
new C3();
const v14 = new C3();
class C18 extends C3 {
    static #g;
    static #n(a20, a21, a22, a23) {
        super.f;
        a22[90];
        return a23;
    }
    static {
        try {
            super.n(this, "f", C3);
        } catch(e28) {
        }
    }
    #e;
    301;
}
const v29 = new C18();
new C18();
const v31 = new C18();
v14[10000] = "symbol";
const o32 = {
    [v31]: -4629,
    "h": -9007199254740990,
    ..."symbol",
    84: v29,
    __proto__: v31,
};
