function f3() {
    return 2.220446049250313e-16;
}
function f4(a5) {
    const o11 = {
        "e": f3,
        "h": 1e-15,
        "g": -1000000000.0,
        "b": 1e-15,
        set a(a7) {
            let v6 = this;
            v6 **= v6;
            for (let v8 = 0; v8 < 32; v8++) {
                a7["p" + v8] = v8;
            }
        },
    };
    return o11;
}
const v12 = f4(2.220446049250313e-16);
f4(-1000000000.0);
f4(1e-15);
function f16(a17, a18, a19, a20) {
    const o30 = {
        ...v12,
        512: 1e-15,
        "c": a20,
        "b": a20,
        [a17]: a17,
        [f3]: null,
        o(a22, a23, a24, a25) {
            new f3();
            a17.b = a25;
            return -1000000000.0;
        },
    };
    return f16;
}
f16(v12, -1000000000.0, f4, 2.220446049250313e-16);
f16(1e-15, -1000000000.0, f16, 2.220446049250313e-16);
f16(2.220446049250313e-16, -1000000000.0, 1e-15, 2.220446049250313e-16);
const v37 = [65535n,0n,964329252n];
let v38 = [964329252n,964329252n,v37,v37];
const v39 = [v38,v38,v37,964329252n,0n];
const v40 = [0n,v38];
const v42 = [[v39,0n]];
const t46 = "fdNr";
t46[0] = 65535n;
let v49;
try {
const t0 = "localeCompare";
v49 = new t0(v37, v42, v42, 58270);
} catch (e) {}
async function* f50(a51, a52, a53) {
    ({"length":a51,...v38} = a52);
    yield v37;
    await a51;
    yield "fdNr";
    const v58 = new BigUint64Array(BigUint64Array, BigUint64Array);
    try { v58(); } catch (e) {}
    const o60 = {
        ...58270,
    };
    return a51;
}
f50(58270, v40, v49);
