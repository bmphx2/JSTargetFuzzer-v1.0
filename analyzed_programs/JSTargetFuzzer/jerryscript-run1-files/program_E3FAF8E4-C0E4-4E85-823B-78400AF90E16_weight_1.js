function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = F1;
    this.d = f0;
    f0.a = f0;
}
const v3 = new F1();
const v4 = new F1();
let v5;
try { v5 = v3.p(); } catch (e) {}
v3.e = v5;
const o8 = {
    "maxByteLength": 2147483648,
};
const v10 = new ArrayBuffer(4096, o8);
new Int8Array(v10);
const v13 = new F1();
function f17(a18, a19, a20, a21) {
    const o26 = {
        [a20]: a18,
        "g": -1925247380,
        set a(a23) {
            v13.d %= 2147483649;
            try {
                super.split(F1);
            } catch(e25) {
            }
        },
        __proto__: a18,
        "e": 2147483649,
        "byteOffset": F1,
        [-1925247380]: Int8Array,
        "d": 2147483649,
        "c": a21,
        ...v4,
    };
    return o26;
}
f17(v13, -1925247380, v3, v4);
const v28 = f17(v3, 2147483649, v13, v3);
f17(v28, v28, 2147483649, v13);
const v32 = new Uint16Array(16);
v32[5] = v32;
