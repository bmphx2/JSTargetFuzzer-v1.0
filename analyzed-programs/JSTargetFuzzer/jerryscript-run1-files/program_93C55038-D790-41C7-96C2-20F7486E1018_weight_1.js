const t0 = -4294967296;
t0[-4294967296] = 536870889n;
const t2 = 536870889n;
t2[10] = -4294967296;
for (let v9 = 0; v9 < 32; v9++) {
    const t5 = 229.78468872049552;
    t5["p" + v9] = v9;
}
function f12(a13, a14, a15, a16) {
    const o25 = {
        [-1]: a13,
        [1e-15](a18, a19) {
            a14.__proto__ = a14;
            const v21 = Symbol.toPrimitive;
            const o24 = {
                [v21]() {
                    229.78468872049552 | this;
                    return a13;
                },
            };
            return -4294967296n;
        },
        "d": a13,
        ...a14,
        "b": 536870889n,
        "e": -7.743415380919094,
        [a16]: a15,
    };
    return o25;
}
const v26 = f12(229.78468872049552, -4294967296n, -4294967296n, 1e-15);
const v29 = new BigInt64Array(64);
const v30 = [v29];
try { v30.toLocaleString(v29, v30); } catch (e) {}
const v32 = f12(229.78468872049552, -7.743415380919094, 536870889n, -60203n);
const v33 = f12(-7.743415380919094, v32, -60203n, v32);
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    let {...v40} = arguments;
    new Int8Array(107);
    this.f = -60203n;
    for (let v44 = 0; v44 < 89; v44++) {
        v32.g >>= 229.78468872049552;
        try { a37(a36, v44, a38, v44, v44); } catch (e) {}
        this[7] = v33;
    }
    this.g = v33;
    this.a = f12;
}
new F34(-4294967296n, -4294967296n, v32);
new F34(f12, 229.78468872049552, v33);
new F34(v26, -4294967296n, v26);
function f49() {
    const o51 = {
        [f49]() {
        },
    };
    return o51;
}
for (const v53 in f49()) {
    v53.search(v53);
}
