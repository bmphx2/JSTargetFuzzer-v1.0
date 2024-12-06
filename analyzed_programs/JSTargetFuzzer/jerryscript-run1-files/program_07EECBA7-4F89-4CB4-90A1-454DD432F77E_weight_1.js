new TypeError(16);
const v5 = new TypeError(16);
const v8 = new Int32Array(194);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    this.c = a12;
    this.b = v8;
    const v13 = [9007199254740992,2986,-2132228841,-2];
    function f14(a15, a16, a17) {
        return arguments;
    }
    const v19 = f14(f14, v13, f14, f14);
    let v20 = "-9223372036854775808";
    let v21 = -4294967297;
    let v22 = -4294967295;
    [v20,,v21,v22] = v19;
    async function f23(a24, a25) {
        new Proxy();
        return f14;
    }
    f23(v20, v19);
    function f29(a30, a31) {
        const o32 = {
            __proto__: this,
            [TypeError]: a12,
        };
        return o32;
    }
    f29(194, a11);
    f29(a12, 16);
    f29(16, a12);
}
new F9(194, v5);
const v37 = new F9(Int32Array, 194);
new F9(F9, TypeError);
v37.__proto__;
let v42 = 1246881327;
v42 <<= v42;
const v43 = [];
function f47(a48) {
    const o63 = {
        ...v43,
        set b(a50) {
            const o53 = {
                "maxByteLength": 2306,
            };
            const v55 = new ArrayBuffer(-1926241091, o53);
            new Int16Array(v55);
        },
        o(a59, a60, a61, a62) {
            a48.__proto__ = a48;
            return a48;
        },
        "c": 16,
        "f": -2147483649n,
        ...v43,
    };
    return o63;
}
const v64 = f47(5n);
f47(-2147483649n);
f47(8n);
const v69 = new Uint8Array(633);
const v72 = new Float64Array(128);
new Error(3027);
const v76 = v69[12];
v64[v76];
v69.byteOffset >>= 128;
function f78(a79, a80, a81) {
    let [v82,v83,v84] = v72;
    try { v76(a80, a80, v69, v82, 5n); } catch (e) {}
    3027 ** a80;
    v83.__proto__;
    return a79;
}
f78(128, 3027, 5n, 16, v5, f47);
