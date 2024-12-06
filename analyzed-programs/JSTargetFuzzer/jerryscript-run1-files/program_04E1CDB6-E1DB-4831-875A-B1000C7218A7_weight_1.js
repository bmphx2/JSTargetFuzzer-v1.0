function f3(a4, a5) {
    const o26 = {
        set d(a7) {
            let v8 = "e";
            v8 *= "symbol";
            [];
        },
        __proto__: a4,
        ...a5,
        "c": 6,
        [a4](a13, a14) {
            try { new this(a13, a5); } catch (e) {}
            this[1];
            new Int32Array(7);
            new Int16Array(4);
            new BigInt64Array(1024);
            return -65535;
        },
    };
    return o26;
}
const v28 = f3(-65535, -65535, f3(6, 6));
f3(6, -65535);
const o41 = {
};
new Proxy(Int8Array, o41);
new Uint8Array(v28);
