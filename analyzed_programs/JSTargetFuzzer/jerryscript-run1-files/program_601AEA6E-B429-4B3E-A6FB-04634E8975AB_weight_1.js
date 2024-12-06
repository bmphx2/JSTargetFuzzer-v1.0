function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -49182;
    this.a = -49182;
}
new F0();
new F0();
new F0();
new BigInt64Array(3621);
new Uint8Array(1895);
new Uint8ClampedArray(1173);
const v15 = [];
function f19(a20) {
    const o30 = {
        ...v15,
        set b(a22) {
            const o25 = {
                "maxByteLength": 2306,
            };
            const v27 = new ArrayBuffer(9, o25);
            new Int16Array(v27);
        },
        "f": 5n,
        ...a20,
    };
    return o30;
}
const v31 = f19(5n);
f19(-2147483649n);
f19(8n);
const v36 = new Uint8Array(633);
const v39 = new Float64Array(128);
new Int16Array(3027);
const v43 = v36[12];
v31[v43];
v36.byteOffset >>= 1895;
function f45(a46, a47, a48) {
    let [v49,v50,v51] = v39;
    try { v43(a47, a47, v36, v49, 5n); } catch (e) {}
    3027 ** a47;
    f45.__proto__;
    return a46;
}
f45(128, 3027, 5n);
