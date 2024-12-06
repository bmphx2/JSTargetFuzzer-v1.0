function f6(a7, a8) {
    const o24 = {
        "f": -746.2541901377633,
        "b": 182148878,
        "h": f6,
        "g": 257,
        ...a8,
        "d": a8,
        __proto__: a8,
        set c(a10) {
            let v11;
            try { v11 = this.next(a10, -746.2541901377633, 424081.0741320278, 182148878, 536870887); } catch (e) {}
            try { a7(a8, v11, this, this, 257); } catch (e) {}
            const v14 = Symbol.iterator;
            const o23 = {
                [v14]() {
                    let v16 = 10;
                    const o22 = {
                        next() {
                            v16--;
                            const v20 = v16 == 0;
                            const o21 = {
                                "done": v20,
                                "value": v16,
                            };
                            return o21;
                        },
                    };
                    return o22;
                },
            };
        },
    };
    a7 = f6;
    const v27 = typeof 182148878 === "number";
    try { a8(-746.2541901377633, v27); } catch (e) {}
    return o24;
}
f6(182148878, 0.0);
f6(424081.0741320278, 0.0);
f6(257, -746.2541901377633);
[-35973,1024,-1282788550,65537,-128,65537,1186286617,-9007199254740990,12147,-1425303611];
[-9007199254740991,-930884831,-268435456,-1054999907,-56027,-536870912,-24359855,2147483647,-11,-13];
[27847];
function f35(a36, a37, a38, a39) {
    a36 *= a39;
    try { a39(424081.0741320278, 182148878); } catch (e) {}
    return a39;
}
function F44(a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
}
const v48 = new F44(F44, f35);
const v49 = [-658853788,-256];
try {
const t0 = -4294967295;
t0(v48, f35, ...v49);
} catch (e) {}
