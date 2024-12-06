const v5 = new BigInt64Array(1480);
const v8 = new Int32Array(1597);
1.7976931348623157e+308 === -1000.0;
for (let v12 = 0; v12 < 32; v12++) {
    v5["p" + v12] = v12;
}
const v15 = new BigUint64Array(209);
function f16(a17, a18, a19, a20) {
    const o36 = {
        "e": a20,
        "a": v15,
        "c": v5,
        "d": a18,
        [v8](a22, a23) {
            let v21 = this;
            --v21;
            a20.valueOf = a18;
            function F25(a27, a28, a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a29;
            }
            new F25(1.7976931348623157e+308, -1e-15, v21, v5);
            new F25(v21, 1.7976931348623157e+308, a23, a20);
            new F25(1.7976931348623157e+308, a17, 1480, -1000.0);
            const v34 = v15[-1e-15];
            super.a = 1597;
            const v35 = a19;
            super.e = a22;
            return v34;
        },
        "f": a18,
        "b": a19,
        "h": 1597,
    };
    return o36;
}
f16(-1000.0, -1000.0, -1000.0, 1480);
f16(1.7976931348623157e+308, -1000.0, -1000.0, 1480);
f16(-1e-15, 1.7976931348623157e+308, 1.7976931348623157e+308, 209);
let v41 = -6n;
v41 |= -4294967296n;
