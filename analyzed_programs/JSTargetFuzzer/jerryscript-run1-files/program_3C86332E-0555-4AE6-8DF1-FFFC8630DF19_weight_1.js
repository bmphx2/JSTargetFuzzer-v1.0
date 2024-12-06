function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 9223372036854775807;
}
const v3 = new F0();
const v4 = new F0();
new F0();
v3[2433170371];
const v12 = Symbol.replace;
v4[v12] = v12;
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a15;
    this.h = a15;
    this.a = a15;
}
new F13(v4);
new F13(v3);
new F13(v3);
const v25 = [];
function f29(a30) {
    const o40 = {
        ...v25,
        set b(a32) {
            const o35 = {
                "maxByteLength": 2306,
            };
            const v37 = new ArrayBuffer(9, o35);
            new Int16Array(v37);
        },
        "f": -2147483649n,
        ...v25,
    };
    return o40;
}
const v41 = f29(5n);
f29(-2147483649n);
const o43 = {
};
const v45 = new Proxy(F0, o43);
f29 % v45;
f29(8n);
const v50 = new Uint8Array(633);
const v53 = new Float64Array(128);
new Int16Array(3027);
const v57 = v50[12];
v41[v57];
v50.byteOffset >>= 128;
function f59(a60, a61, a62) {
    let [v63,v64,v65] = v53;
    try { v57(a61, a61, v50, v63, 5n); } catch (e) {}
    3027 ** a61;
    v64.__proto__;
    return a60;
}
f59(128, 3027, 5n);
