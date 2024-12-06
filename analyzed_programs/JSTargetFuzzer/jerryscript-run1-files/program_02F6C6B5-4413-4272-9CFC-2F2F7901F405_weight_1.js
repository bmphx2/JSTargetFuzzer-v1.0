function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 8n;
    this.b = 8n;
    a5.e = a5;
}
const v6 = new F3(F3);
const v7 = new F3(8n);
const v8 = new F3(v6);
function f12(a13, a14, a15) {
    const o26 = {
        set g(a17) {
            try { ("1073741823").padEnd(a14, ...a17, ..."307491828", a17, this, a17); } catch (e) {}
            16n in v7;
        },
        ...v7,
        "b": "37154",
        ["307491828"]: "1073741823",
        o(a22, a23, a24) {
            const v25 = (129n)[F3];
            super.b = v25;
            return v25;
        },
    };
    return o26;
}
f12("307491828", v8, v8);
f12(129n, v8, v8);
f12(8n, v8, v6);
const v32 = new BigInt64Array(512);
const v35 = new Float64Array(16);
new Int8Array(15);
v35.buffer /= 16;
for (const v45 of v32) {
    new Float64Array(5);
    new Float64Array(2);
    new Float32Array(2983);
}
