const v12 = [];
function f16(a17) {
    const o27 = {
        ...v12,
        set b(a19) {
            const o22 = {
                "maxByteLength": 2306,
            };
            const v24 = new ArrayBuffer(9, o22);
            new Int16Array(v24);
        },
        "f": -2147483649n,
        ...v12,
    };
    return o27;
}
const v28 = f16(5n);
f16(-2147483649n);
f16(8n);
Object.defineProperty(v28, 0, { configurable: true, set: f16 });
const o35 = {
    "maxByteLength": 129,
};
const v37 = new ArrayBuffer(64, o35);
new Int16Array(v37);
const v40 = new Uint8Array(633);
const v43 = new Float64Array(128);
new Int16Array(3027);
const v47 = v40[12];
v28[v47];
v40.byteOffset >>= 128;
function f49(a50, a51, a52) {
    let [v53,v54,v55] = v43;
    try { v47(a51, a51, v40, v53, 5n); } catch (e) {}
    3027 ** a51;
    v54.__proto__;
    return a50;
}
f49(128, 3027, 5n);
