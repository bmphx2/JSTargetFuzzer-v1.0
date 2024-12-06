function f0() {
    const o10 = {
        __proto__: "fromCharCode",
        "d": "fromCharCode",
        ["fromCharCode"](a5) {
            a5 < -65536;
            const o7 = {
            };
            new Proxy(a5, this);
            return 64;
        },
    };
    return o10;
}
f0();
f0();
f0();
new Uint16Array(256);
new Float64Array(4);
new BigInt64Array(256);
new Float32Array(3750);
const v28 = ("e").endsWith;
Reflect.apply(v28, v28);
