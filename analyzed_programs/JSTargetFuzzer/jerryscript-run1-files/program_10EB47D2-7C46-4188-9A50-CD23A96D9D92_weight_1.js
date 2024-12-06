function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -46045;
    this.g = -46045;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f10(a11, a12, a13, a14) {
    const o45 = {
        [a12](a16, a17, a18, a19) {
            v5.e = v4;
            const v20 = this - this;
            const v22 = new Float64Array();
            const v25 = new Uint32Array(1);
            const v26 = new Float64Array(v25);
            v22 != Float64Array;
            a11[Symbol.toPrimitive] = v26;
            v4[v20] = 1;
            a12 << a13;
            return a19;
        },
        o(a32, a33, a34) {
            v3.b = a12;
            for (let i36 = 0; i36 < 2; i36++) {
                a11 <<= a32;
                const o42 = {
                };
                new Proxy(a12, o42);
            }
            return a11;
        },
    };
    return o45;
}
const v46 = f10(v3, v4, 4, 4);
f10(v4, v4, -1073741824, 4);
f10(v46, v4, -1073741824, 4);
const v52 = [];
function f56(a57) {
    const o67 = {
        ...v52,
        set b(a59) {
            const o62 = {
                "maxByteLength": 2306,
                "d": 8n,
                __proto__: v5,
                ...v4,
                "e": 2306,
                "c": v3,
            };
            const v64 = new ArrayBuffer(9, o62);
            new Int16Array(v64);
        },
        "f": -2147483649n,
        ...v52,
    };
    return o67;
}
const v68 = f56(5n);
f56(-2147483649n);
f56(8n);
const v73 = new Uint8Array(633);
const v76 = new Float64Array(128);
new Int16Array(3027);
const v80 = v73[12];
v68[v80];
v73.byteOffset >>= 128;
function f82(a83, a84, a85) {
    let [v86,v87,v88] = v76;
    try { v80(a84, a84, v73, v86, 5n); } catch (e) {}
    3027 ** a84;
    v87.__proto__;
    return a83;
}
f82(128, 3027, 5n);
{
}
