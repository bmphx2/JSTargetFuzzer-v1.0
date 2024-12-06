function f3(a4, a5) {
    const o6 = {
        "b": -11n,
        __proto__: a4,
        [a5]: 2147483648n,
        [64n]: a5,
        ...2147483648n,
        8: 2147483648n,
        7: f3,
        "d": 2147483648n,
        "f": 64n,
        "e": -11n,
        "c": 64n,
        2077: f3,
    };
    return o6;
}
f3(64n, 64n);
f3(2147483648n, -11n);
f3(-11n, 64n);
new Int32Array(3254);
new Uint8ClampedArray(1);
new Uint32Array(9);
7n % 7n;
