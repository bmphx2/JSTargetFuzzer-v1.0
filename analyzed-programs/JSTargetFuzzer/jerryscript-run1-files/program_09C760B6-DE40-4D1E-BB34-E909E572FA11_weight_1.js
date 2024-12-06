const v1 = new WeakSet();
function f6(a7, a8, a9) {
    const o13 = {
        set g(a11) {
            try { a11.n(); } catch (e) {}
            super.g = a11;
        },
        [a7]: 2147483647,
        __proto__: a9,
        [a8]: v1,
        "c": 13,
        "d": a8,
        66: a8,
        "f": true,
        "a": WeakSet,
    };
    return o13;
}
f6(2147483647, 2147483647, 13);
f6(2147483647, 13, WeakSet);
f6(13, 13, true);
function f17() {
    return v1;
}
9007199254740990 > 2023143923n;
