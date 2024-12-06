new Int32Array(16);
const v5 = new Int32Array(16);
const v8 = new Int32Array(194);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    this.c = a12;
    this.b = v8;
}
new F9(194, v5);
new F9(Int32Array, 194);
new F9(F9, Int32Array);
const v16 = [];
function f20(a21) {
    const o36 = {
        ...v16,
        set b(a23) {
            const o26 = {
                "maxByteLength": 2306,
            };
            const v28 = new ArrayBuffer(9, o26);
            new Int16Array(v28);
        },
        o(a32, a33, a34, a35) {
            a21.__proto__ = a21;
            return a21;
        },
        "c": 16,
        "f": -2147483649n,
        ...v16,
    };
    return o36;
}
const v37 = f20(5n);
f20(-2147483649n);
f20(8n);
const v42 = new Uint8Array(633);
const v45 = new Float64Array(128);
new Int16Array(3027);
const v49 = v42[12];
v37[v49];
v42.byteOffset >>= 128;
function f51(a52, a53, a54) {
    let [v55,v56,v57] = v45;
    try { v49(a53, a53, v42, v55, 5n); } catch (e) {}
    3027 ** a53;
    v56.__proto__;
    return a52;
}
f51(128, 3027, 5n);
