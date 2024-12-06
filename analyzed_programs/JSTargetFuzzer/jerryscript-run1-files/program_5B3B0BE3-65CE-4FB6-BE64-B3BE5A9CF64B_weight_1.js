function f0() {
}
class C1 {
    static m() {
        const v3 = delete this[10];
        v3 !== v3;
        return f0;
    }
    constructor() {
        for (let v6 = 0; v6 < 32; v6++) {
            this["p" + v6] = v6;
        }
    }
    [f0];
    #b;
    static [f0];
}
const v9 = new C1();
const v10 = new C1();
const v11 = new C1();
function f12(a13, a14) {
    const o30 = {
        get g() {
            function f16() {
                return v10;
            }
            return a14;
        },
        "g": v9,
        6: a13,
        set b(a18) {
            const v20 = Symbol.iterator;
            const o29 = {
                [v20]() {
                    let v22 = 10;
                    const o28 = {
                        next() {
                            v22--;
                            const v26 = v22 == 0;
                            const o27 = {
                                "done": v26,
                                "value": v22,
                            };
                            return o27;
                        },
                    };
                    return o28;
                },
            };
        },
    };
    return o30;
}
const v31 = f12(v10, v11);
const v32 = f12(v31, v10);
f12(v31, v31);
let v40 = 0;
while (v40 < 10) {
    const v44 = Symbol.toStringTag;
    v32[v44] = "valueOf";
    try { v44["m"]("m", "m", "-65535"); } catch (e) {}
    v40++;
}
