function f0() {
}
const v1 = [f0,f0,f0,f0,f0];
const v3 = [[f0,v1,f0,v1]];
function f10(a11, a12) {
    const o17 = {
        "g": v3,
        get e() {
            for (let v14 = 0; v14 < 32; v14++) {
                const t9 = "1";
                t9["p" + v14] = v14;
            }
            return -553458493n;
        },
        ["y"]: v1,
        "d": "1",
        202: v3,
        "e": a12,
        "b": v3,
        "h": a12,
    };
    return o17;
}
f10(v1, v1);
const v19 = f10(v3, f10);
const v20 = f10(v1, "1");
function f21(a22, a23) {
    const o36 = {
        "g": v1,
        "e": v19,
        ...v20,
        "a": "buffer",
        "b": 7n,
        "f": f0,
        __proto__: a22,
        p(a25, a26, a27) {
            a27[5] >>>= a22;
            try { a26(a26, 1131338037n, a22, a27, v3); } catch (e) {}
            const o31 = {
                "maxByteLength": 852,
            };
            const v33 = new SharedArrayBuffer(11, o31);
            const v35 = new BigUint64Array(v33);
            return v35;
        },
    };
    return o36;
}
const v37 = f21(1131338037n, 1131338037n);
const v38 = f21(f10, 7n);
f21(v37, -553458493n);
function F40(a42) {
    if (!new.target) { throw 'must be called with new'; }
}
const v43 = new F40();
const v46 = Array();
const v47 = v43[268435456];
switch (8) {
    default:
        v38[v37] = "buffer";
        let v48 = f10("buffer", -553458493n);
        v48++;
        break;
    case F40:
        break;
    case v47:
        break;
    case v46:
        break;
}
