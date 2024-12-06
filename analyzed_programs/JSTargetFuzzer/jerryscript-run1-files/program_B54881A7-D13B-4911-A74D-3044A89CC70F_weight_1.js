function f12(a13, a14, a15, a16) {
    const o17 = {
        __proto__: 5,
        "b": a15,
        [a13]: 5,
        ...a13,
        13: a16,
        "e": -57249,
        "f": a14,
        "g": 62948347,
        "h": 190087991,
        "d": a13,
        "c": a15,
        "a": a16,
        5: a13,
    };
    return o17;
}
const v18 = f12(62948347, -283898772n, 536870912n, -12636n);
const v19 = f12(268435440, -12636n, -12636n, 536870912n);
const v20 = f12(128, -283898772n, 536870912n, -12636n);
v19[-283898772n] = 190087991;
const o30 = {
    valueOf() {
        Object.defineProperty(this, 128, { writable: true, configurable: true, enumerable: true, get: f12, set: f12 });
        function F22(a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = 1757673700;
            this.c = f12;
        }
        new F22(v18, this, v19);
        const v28 = new F22(this, v18, v20);
        new F22(v18, v28, v20);
        return 4294967297;
    },
};
