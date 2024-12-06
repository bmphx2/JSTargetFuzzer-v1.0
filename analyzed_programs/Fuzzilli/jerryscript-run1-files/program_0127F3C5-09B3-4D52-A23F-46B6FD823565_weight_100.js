class C3 {
    set h(a5) {
        for (let v6 = 0; v6 < 32; v6++) {
            const t3 = "splice";
            t3["p" + v6] = v6;
        }
    }
    static f;
    ["splice"] = "splice";
    #a = "splice";
}
const v9 = new C3();
const v10 = new C3();
const v11 = new C3();
new Set();
function f14(a15, a16, a17) {
    const o26 = {
        "h": a15,
        "c": v10,
        "f": "splice",
        o(a19, a20, a21) {
            let {"a":v22,"f":v23,"h":v24,...v25} = v9;
            return a16;
        },
        "g": -1.2715110746176301e+308,
        "d": "splice",
        16: a16,
    };
    return o26;
}
const v27 = f14(v11, 839.201912343287, v9);
f14(f14(v10, v27, v10), v11, v11);
function f30(a31, a32) {
    ({"e":a32,} = a31);
    let v33;
    try { v33 = a32(); } catch (e) {}
    v27 in v33;
}
new Promise(f30);
-1.2715110746176301e+308 !== v9 ? -1.2715110746176301e+308 : v9;
