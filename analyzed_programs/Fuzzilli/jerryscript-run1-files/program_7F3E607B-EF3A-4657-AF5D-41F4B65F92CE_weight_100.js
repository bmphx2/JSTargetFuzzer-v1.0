function f0() {
    let v2 = 8;
    const o13 = {
        set d(a5) {
            v2 += a5;
            this | this;
        },
        p(a8) {
            const v9 = ("c")[v2];
            const o10 = {
            };
            new Proxy(this, o10);
            return v9;
        },
        "c": -2147483647,
    };
    return o13;
}
const v14 = f0();
const v15 = f0();
f0();
new Uint16Array(672);
new BigUint64Array(0);
new Int8Array(3790);
for (let i28 = 0, i29 = 10; i28 < i29; i28++, i29--) {
    function f37(a38, a39) {
        Object.defineProperty(v14, "d", { configurable: true, enumerable: true, get: f0, set: f0 });
        const o42 = {
            "maxByteLength": 257,
        };
        const v44 = new SharedArrayBuffer(7, o42);
        new DataView(v44);
        return 7;
    }
    f37(3790, v15);
}
