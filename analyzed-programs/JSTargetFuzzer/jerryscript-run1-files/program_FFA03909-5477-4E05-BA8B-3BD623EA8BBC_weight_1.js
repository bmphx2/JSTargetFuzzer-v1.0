function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2;
}
new F0();
new F0();
new F0();
const v11 = Symbol.toPrimitive;
const o14 = {
    [v11]() {
        Symbol(this);
        return -1000000000.0;
    },
};
const v17 = [];
function f21(a22) {
    const o32 = {
        ...v17,
        set b(a24) {
            const o27 = {
                "maxByteLength": 2306,
            };
            const v29 = new ArrayBuffer(9, o27);
            new Int16Array(v29);
        },
        "f": -2147483649n,
        ...v17,
    };
    return o32;
}
const v33 = f21(5n);
f21(-2147483649n);
f21(8n);
const v38 = new Uint8Array(633);
Object();
const v43 = new Float64Array(128);
new Int16Array(3027);
const v47 = v38[12];
v33[v47];
v38.byteOffset >>= 128;
function f49(a50, a51, a52) {
    let [v53,v54,v55] = v43;
    try { v47(a51, a51, v38, v53, 5n); } catch (e) {}
    3027 ** a51;
    v54.__proto__;
    return a50;
}
f49(128, 3027, 5n);
