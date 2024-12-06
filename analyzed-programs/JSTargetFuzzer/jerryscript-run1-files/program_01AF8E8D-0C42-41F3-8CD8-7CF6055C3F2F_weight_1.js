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
const v41 = new Float64Array(128);
new Int16Array(3027);
const v45 = v38[12];
v33[v45];
v38.byteOffset >>= 128;
function f47(a48, a49, a50) {
    let [v51,v52,v53] = v41;
    try { v45(a49, a49, v38, v51, 5n); } catch (e) {}
    3027 ** a49;
    v52.__proto__;
    return a48;
}
f47(128, 3027, 5n);
