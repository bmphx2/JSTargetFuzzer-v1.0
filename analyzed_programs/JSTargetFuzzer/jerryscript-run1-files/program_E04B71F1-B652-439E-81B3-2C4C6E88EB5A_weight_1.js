class C3 {
    static set g(a5) {
        try { ("function").codePointAt(a5); } catch (e) {}
    }
    set b(a11) {
        this[Symbol.e] = -268435456;
        for (let v14 = 0; v14 < 32; v14++) {
            const t7 = "function";
            t7["p" + v14] = v14;
        }
    }
}
const v17 = new C3();
const v18 = new C3();
const v19 = new C3(C3);
function f20(a21, a22) {
    const o28 = {
        ...v18,
        "e": a21,
        "b": -268435456,
        "c": v18,
        "g": "function",
        get d() {
            try {
                super.setFloat32(a22, C3, this, a21, this);
            } catch(e25) {
            }
            try {
                super.padStart();
            } catch(e27) {
            }
            return v18;
        },
    };
    return o28;
}
const v29 = f20(v18, v19);
const v30 = f20(v17, v29);
const v31 = f20(v29, v29);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v30;
}
new F32(v31, C3, v31, v29);
new F32("AHCB", v30, v29, v29);
new F32("AHCB", v17, v31, v30);
const v42 = Array();
const v44 = [Array];
Reflect.apply(v42.forEach, Array, v44);
