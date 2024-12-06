function f3() {
    return 2147483648;
}
function f4(a5, a6) {
    const o18 = {
        "e": a5,
        __proto__: a6,
        "d": 2147483648,
        [a5]: 2147483648,
        "f": 2147483648,
        ...a5,
        "g": a6,
        ...a5,
        /*
        __proto__: a6,
        */
        [a6]: 255,
        set b(a8) {
            for (let i10 = 0;
                (() => {
                    eval(a8);
                    const o13 = {
                    };
                    return this < 9;
                })();
                ) {
            }
        },
        "d": f3,
        "a": 255,
        "set": f4,
        /*
        __proto__: a5,
        */
        "h": -2147483647,
        "b": a6,
        1: 255,
        [a6]: 255,
        "g": 255,
        "maxByteLength": 255,
        [255]: a5,
        [2147483648]: 2147483648,
        ...a6,
        "f": a6,
        "c": 2147483648,
        [255]: 2147483648,
        ...a5,
        268435440: a6,
        3: f4,
    };
    return o18;
}
f4(255, 2147483648);
f4(255, -2147483647);
f4(255, 2147483648);
new Uint8ClampedArray(64);
new Uint16Array(256);
new Int16Array(1024);
const v35 = new BigUint64Array(BigUint64Array);
new BigInt64Array(v35);
