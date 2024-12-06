function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 15;
    this.g = 15;
}
new F0();
new F0();
const v5 = new F0();
new Int32Array(64);
const v11 = new Uint8ClampedArray(512);
const v14 = new BigUint64Array(8);
const v15 = [];
function f19(a20) {
    const o37 = {
        ...v15,
        set b(a22) {
            const o25 = {
                "maxByteLength": 2306,
            };
            const v30 = 2306 || a22;
            const v31 = a22 && v30;
            -128 >>> v30;
            -1314230824 ^ v31;
            new ArrayBuffer(9, o25);
            new Int16Array(v5);
        },
        "h": a20,
        "g": v5,
        ...v14,
        "a": v11,
        9: a20,
        "f": -2147483649n,
        ...F0,
    };
    return o37;
}
let v38 = 0;
while (v38 < 3) {
    v14 != v38 ? v14 : 64;
    v38++;
}
const v44 = f19(5n);
f19(-2147483649n);
const v46 = f19(8n);
const v49 = new Uint8Array(633);
const v52 = new Float64Array(128);
new Int16Array(3027);
const v56 = v46[12];
v44[v56];
v49.byteOffset >>= 128;
function f58(a59, a60, a61) {
    let [v62,v63,v64] = v52;
    try { v56(a60, a60, v49, v62, 5n); } catch (e) {}
    3027 ** a60;
    return v63.__proto__;
}
f58(128, 3027, 5n);
