new TypeError(16);
const v5 = new TypeError(16);
const v8 = new Int32Array(194);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    this.c = a12;
    this.b = v8;
    function f13(a14, a15) {
        const o16 = {
            __proto__: this,
            [TypeError]: a12,
        };
        return o16;
    }
    f13(194, a11);
    f13(a12, 16);
    f13(16, a12);
}
new F9(194, v5);
const v21 = new F9(Int32Array, 194);
new F9(F9, TypeError);
v21.__proto__;
let v26 = 1246881327;
v26 <<= v26;
const v27 = [];
function f31(a32) {
    const o47 = {
        ...v27,
        set b(a34) {
            const o37 = {
                "maxByteLength": 2306,
            };
            const v39 = new ArrayBuffer(-1926241091, o37);
            new Int16Array(v39);
        },
        o(a43, a44, a45, a46) {
            a32.__proto__ = a32;
            return a32;
        },
        "c": 16,
        "f": -2147483649n,
        ...v27,
    };
    return o47;
}
const v48 = f31(5n);
f31(-2147483649n);
f31(8n);
const v53 = new Uint8Array(633);
const v56 = new Float64Array(128);
new Error(3027);
const v60 = v53[12];
v48[v60];
v53.byteOffset >>= 128;
function f62(a63, a64, a65) {
    let [v66,v67,v68] = v56;
    try { v60(a64, a64, v53, v66, 5n); } catch (e) {}
    3027 ** a64;
    v67.__proto__;
    return a63;
}
f62(128, 3027, 5n, 16, v5, f31);
