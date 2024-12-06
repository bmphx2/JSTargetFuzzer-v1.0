const v1 = new WeakSet();
function f6(a7, a8, a9) {
    const o19 = {
        set g(a11) {
            try { a11.n(); } catch (e) {}
            super.g = a11;
            const o13 = {
                ...a11,
                __proto__: this,
            };
            super.a = a7;
        },
        o(a15, a16, a17, a18) {
            var f = a17;
            v1[10] **= 2147483647;
            return this;
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
    return o19;
}
let {"c":v21,"f":v22,} = f6(2147483647, 2147483647, 13);
true instanceof WeakSet;
f6(2147483647, 13, WeakSet);
f6(13, 13, true);
function f29() {
    return v1;
}
9007199254740990 > 2023143923n;
