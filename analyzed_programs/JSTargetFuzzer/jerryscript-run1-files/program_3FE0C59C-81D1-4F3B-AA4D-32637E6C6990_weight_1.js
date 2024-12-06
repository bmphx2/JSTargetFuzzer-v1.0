function f3(a4, a5) {
    const o10 = {
        get a() {
            return a4;
        },
        ...a4,
        "h": a4,
        "c": 6,
        "g": a5,
        [6]: a4,
    };
    return o10;
}
f3(57185, 268435456);
const v12 = f3(57185, 57185);
f3(268435456, 268435456);
new WeakMap();
v12[898];
let v20 = 0;
do {
    new Int8Array(5);
    new BigInt64Array(256);
    new Uint8Array(128);
    v20++;
} while (v20 < 0)
