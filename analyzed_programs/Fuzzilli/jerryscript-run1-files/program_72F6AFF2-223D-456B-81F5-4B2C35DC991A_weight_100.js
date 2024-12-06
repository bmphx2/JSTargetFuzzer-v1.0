let v3 = [40087,10,10];
const v4 = [v3,-1156715334];
const v5 = [-1156715334,40087];
function f6(a7, a8, a9, a10) {
    const o16 = {
        5: 10,
        ...v3,
        "a": a7,
        [-2]: v4,
        "c": -1156715334,
        set g(a12) {
            const o13 = {
                __proto__: this,
            };
            try { a7(a12, a8, a9); } catch (e) {}
        },
        "e": 40087,
        "d": a9,
        "b": 40087,
    };
    return o16;
}
const v17 = f6(f6, 40087, v3, 10);
const v18 = f6(v17, v5, v5, v17);
f6(v18, v5, v5, v18);
function f20(a21, a22) {
    const o23 = {
        ...v18,
        "g": a21,
        [a21]: a21,
        "e": a22,
        "f": f6,
        "c": v17,
        __proto__: v3,
        ...v3,
        ...a22,
        "b": v4,
        "a": a21,
        "d": f6,
        0: a22,
        "h": a21,
        ...v18,
    };
    return o23;
}
f20(-1156715334, f20(-1156715334, v17));
f20(40087, v18);
let v32 = -4294967297;
const v33 = Math.random();
++v32;
const v35 = --v3;
++v32;
v35 >>> v32;
let v38;
try { v38 = v5.findIndex(f6, "number"); } catch (e) {}
f6(f20, v38, v38, v33);
