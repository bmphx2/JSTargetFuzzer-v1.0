function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1;
}
new F0();
new F0();
new F0();
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
const v28 = f16(f16);
f16(v28);
f16(8n);
const v33 = new Uint8Array(633);
const v36 = new Float64Array(128);
new Int16Array(3027);
const v40 = v33[12];
v28[v40];
v33.byteOffset >>= 128;
function f42(a43, a44, a45) {
    let [v46,v47,v48] = v36;
    try { v40(a44, a44, v33, v46, 5n); } catch (e) {}
    3027 ** a44;
    v47.__proto__;
    return a43;
}
f42(128, 3027, 5n);
