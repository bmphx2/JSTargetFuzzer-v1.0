function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.match = F0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f12(a13, a14) {
    const o30 = {
        n(a16, a17) {
            const o29 = {
                __proto__: a14,
                "c": -440632242,
                0: -4294967297,
                set e(a19) {
                    try {
                    } catch(e20) {
                        const o28 = {
                            o(a22, a23, a24, a25) {
                                Symbol();
                                return this;
                            },
                        };
                    }
                },
                4134726565: v3,
            };
            return this;
        },
        "e": v5,
        ...v5,
        [F0]: -440632242,
    };
    return a14;
}
f12(v5, v5);
f12(v3, v5, f12(v4, v3), 65537);
function f34(a35, a36) {
    return a35 instanceof f34;
}
const v39 = new Promise(f34);
for (let v40 = 0; v40 < 5; v40++) {
    v39["catch"]();
}
