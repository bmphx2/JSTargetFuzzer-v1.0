const v6 = [-16,-23442];
const v7 = [v6,-4096,1,-16];
const v8 = [v7,v7,-23442,-256];
function f9(a10, a11) {
    const o41 = {
        ...v6,
        m(a13, a14, a15, a16) {
            for (let v17 = 0; v17 < 32; v17++) {
                a13["p" + v17] = v17;
            }
            return -256;
        },
        [255](a21, a22) {
            for (let i24 = 0; i24 < 10; i24++) {
                v6.valueOf = f9;
                super.d = -23442;
            }
            const v31 = Symbol.iterator;
            const o40 = {
                "c": -4096,
                "a": -4096,
                ...a21,
                "g": a10,
                "f": a22,
                [v31]() {
                    let v33 = 10;
                    const o39 = {
                        next() {
                            v33--;
                            const v37 = v33 == 0;
                            const o38 = {
                                "done": v37,
                                "value": v33,
                            };
                            return o38;
                        },
                    };
                    return o39;
                },
                ...v6,
                [-23442]: a11,
                __proto__: a21,
                "e": a11,
                "b": a10,
            };
            return o40;
        },
    };
    return o41;
}
const v42 = f9(v8, v8);
const v43 = f9(v8, v8);
const v44 = f9(-4096, v7);
function F45(a47, a48, a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a47;
    let v53 = -1;
    v53 = a47;
    this[v8] ^= -23442;
    this.f = v42;
    this.b = a48;
}
new F45(-256, v43, v6, v6);
new F45(1, v44, v7, v8);
new F45(255, v43, v6, v7);
/(\u{12345}\u{23456})/yu;
/\111+/sm;
