function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.c = F0;
    this.h = v5;
}
const v10 = new F6(v5, v4);
new F6(v10, v10);
let v12 = new F6(v5, v3);
const v17 = v12 & v12;
++v12;
-F0;
const v20 = v12 >>> v17;
v17 * 9092;
Math.max(v17 && v20);
new Uint16Array(5);
new Int32Array(512);
new Float64Array(8);
const v32 = [];
function f36(a37) {
    const o47 = {
        ...v32,
        set b(a39) {
            const o42 = {
                "maxByteLength": 2306,
            };
            const v44 = new ArrayBuffer(9, o42);
            new Int16Array(v44);
        },
        "f": -2147483649n,
        ...v32,
    };
    return o47;
}
const v48 = f36(5n);
f36(-2147483649n);
f36(8n);
const v53 = new Uint8Array(633);
const v56 = new Float64Array(128);
new Int16Array(3027);
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
f62(128, 3027, 5n);
