function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 40143651;
    this.b = 40143651;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a13;
    this.f = a13;
    this.g = 1000.0;
}
new F9(v4, v5, v4);
new F9(v4, v4, v3);
new F9(v5, v5, v4);
const v21 = [];
function f23(a24) {
    const o34 = {
        ...v21,
        set b(a26) {
            const o29 = {
                "maxByteLength": 2306,
            };
            const v31 = new ArrayBuffer(9, o29);
            new Int16Array(v31);
        },
        "f": 1000.0,
        ...v21,
    };
    return o34;
}
f23(5n);
const v37 = new BigInt64Array(512);
const v40 = new Float64Array(16);
const v43 = Array(15);
const o44 = {
    __proto__: v43,
};
new Int8Array(15);
v40.buffer /= 16;
for (const v53 of v37) {
    new Float64Array(5);
    new Float64Array(2);
    new Float32Array(2983);
}
