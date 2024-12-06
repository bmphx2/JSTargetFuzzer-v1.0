function f6(a7, a8, a9, a10) {
    const o11 = {
        ...a7,
        8: 3,
        "d": 15281n,
        "f": -9007199254740990,
        "g": a10,
        4: a7,
        __proto__: a7,
        [-1]: a9,
        "c": a8,
        "a": 12111n,
        "h": a10,
    };
    return o11;
}
const v12 = f6(f6, -9007199254740990, 12111n, 15281n);
f6(3, 535417262, -16n, 12111n);
f6(v12, 535417262, 12111n, f6);
new Int32Array(77);
new Uint32Array(64);
new Float32Array(4);
const v26 = new Uint8Array(1705);
const o32 = {
    m(a28, a29, a30) {
        v26.fill();
        return this;
    },
};
Reflect.apply(o32.m);
