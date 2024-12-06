const v0 = [4294967296,-1009155454,11,536870887,9491,16];
const v1 = [-1,-1358571566,7,1035075616,256,15,0,518220792,15168];
const v2 = [-65536,81611658,-8,-2147483649];
function f3(a4) {
    const o9 = {
        o(a6, a7) {
            v2[5] = a7;
            a6 ^= v0;
            try { a7(a4, a7, v0); } catch (e) {}
            return a7;
        },
        "b": v2,
        "h": v1,
        "c": v2,
        "d": v0,
        "f": a4,
    };
    return o9;
}
f3(v1);
f3(v0);
f3(v2);
const v19 = [];
function f23(a24) {
    const o34 = {
        ...v19,
        set b(a26) {
            const o29 = {
                "maxByteLength": 2306,
            };
            const v31 = new ArrayBuffer(9, o29);
            new resourceName(v31);
        },
        "f": -2147483649n,
        ...v19,
    };
    return o34;
}
const v35 = f23(5n);
f23(-2147483649n);
f23(-1478323276n);
const v40 = new Uint8Array(633);
const v43 = new Float64Array(128);
new Int16Array(3027);
const v47 = v40[12];
v35[v47];
v40.byteOffset >>= 128;
function f49(a50, a51, a52) {
    let [v53,v54,v55] = v43;
    try { v47(a51, a51, v40, v53, 5n); } catch (e) {}
    3027 ** a51;
    v54.__proto__;
    return a50;
}
f49(128, 3027, 5n);
