const v0 = [];
function f1() {
    const o6 = {
        "c": v0,
        3: v0,
        get e() {
            const v3 = v0[this];
            super.c = v3;
            const v4 = v3 in v0;
            let v5;
            try { v5 = v3(v3, v3, v4); } catch (e) {}
            return v5;
        },
        __proto__: v0,
        "f": v0,
        "b": v0,
        748005729: v0,
        "e": v0,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
const v9 = f1();
function f10() {
    return f1;
}
[[f10,v9]];
const v13 = [v0,v8,v9,v7,v7];
function f14() {
    return f14;
}
function f15(a16, a17, a18, a19) {
    const o28 = {
        "b": f10,
        toString(a21, a22) {
            try { this.asUintN(v9, a17); } catch (e) {}
            class C24 {
                d = a18;
                static g = v13;
            }
            new C24();
            new a18();
            new a18();
            return a21;
        },
        "e": f10,
        "a": a17,
    };
    return o28;
}
f15(v9, v8, v9, v0);
f15(v8, v7, v7, f1);
f15(v9, v9, f15, f15);
([])["sort"]();
