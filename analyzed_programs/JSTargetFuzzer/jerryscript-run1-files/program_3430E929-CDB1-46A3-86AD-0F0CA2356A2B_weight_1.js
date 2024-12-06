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
    function F31() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f34(a35, a36) {
        return F31;
    }
    Object.defineProperty(f34(), 257, { enumerable: true, get: f34 });
    return f16;
}
f16(v12, -1000000000.0, f4, 2.220446049250313e-16);
f16(1e-15, -1000000000.0, f16, 2.220446049250313e-16);
f16(2.220446049250313e-16, -1000000000.0, 1e-15, 2.220446049250313e-16);
const v44 = [65535n,0n,964329252n];
let v45 = [964329252n,964329252n,v44,v44];
const v46 = [v45,v45,v44,964329252n,0n];
const v47 = [0n,v45];
const v49 = [[v46,0n]];
const t53 = "fdNr";
t53[0] = 65535n;
let v56;
try {
const t0 = "localeCompare";
v56 = new t0(v44, v49, v49, 58270);
} catch (e) {}
async function* f57(a58, a59, a60) {
    ({"length":a58,...v45} = a59);
    yield v44;
    await a58;
    yield "fdNr";
    const v65 = new BigUint64Array(BigUint64Array, BigUint64Array);
    try { v65(); } catch (e) {}
    const o67 = {
        ...58270,
    };
    return a58;
}
f57(58270, v47, v56);
