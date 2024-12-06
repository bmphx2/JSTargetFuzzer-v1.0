class C3 {
    g;
    static #a = -8;
    a;
    constructor(a5) {
        const v6 = this[a5];
        try { v6(-981956763); } catch (e) {}
    }
    static h = -981956763;
    static [-8];
}
const v11 = new C3(-12103);
const v12 = new C3(-8);
const v13 = new C3(-8);
function f14(a15, a16, a17) {
    const o24 = {
        "c": a16,
        valueOf(a19, a20) {
            a17[2147483649] = this;
            const o21 = {
            };
            new Proxy(this, o21);
            return this;
        },
        ...C3,
        [a15]: a16,
        __proto__: a17,
    };
    return o24;
}
const v25 = f14(-12103, -8, v11);
const v26 = f14(v12, -981956763, v13);
f14(v13, -8, v13);
v11[v11];
(28820n >>> v25) ^ v26;
const o36 = {
    "maxByteLength": 4294967295,
};
const v38 = new ArrayBuffer(62, o36);
new Uint8Array(v38);
