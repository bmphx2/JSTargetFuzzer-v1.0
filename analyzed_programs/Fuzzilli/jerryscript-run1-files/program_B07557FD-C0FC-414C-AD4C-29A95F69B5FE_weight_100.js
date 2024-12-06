const v0 = [-22199,4,4];
[65535,268435440,-755656218,2,53228,92503475,2055168845,-2,12,-10];
const v2 = [1024,52179,536870889,-32208,65536,-1999666121,-2147483649,-9007199254740992];
const v4 = new Date();
class C5 {
    n(a7) {
        const v8 = `
            Date(v8);
        `;
        eval(v8);
        return v0;
    }
    static m(a13, a14) {
        delete Date[this];
        a14[v0] = v4;
        function f16() {
            return v4;
        }
        return this;
    }
}
const v17 = new C5();
const v18 = new C5();
const v19 = new C5();
function f20(a21, a22, a23, a24) {
    const o25 = {
        ...Date,
        "e": v2,
        __proto__: C5,
        "d": v18,
        "b": v2,
        "c": Date,
        "g": v0,
        "f": a22,
        [a24]: v18,
        "h": v0,
        "a": v17,
        45: v4,
        ...a24,
        [v19]: v17,
    };
    return o25;
}
const v26 = f20(v4, f20, v18, v0);
f20(C5, v4, f20(C5, v26, v18, v2), v2);
function f30(a31) {
    return v26;
}
class C32 extends f30 {
    static set d(a34) {
        const v35 = f20(v0, a34, v17, a34);
        try {
            super.delete(v19, this, v4, v0, v35);
        } catch(e37) {
        }
    }
}
