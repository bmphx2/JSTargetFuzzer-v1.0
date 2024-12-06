function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 536870888;
}
new F0();
new F0();
new F0();
new BigInt64Array(16);
new Int16Array(64);
new Uint8ClampedArray(11);
function f18() {
    const v19 = -Infinity;
    const o27 = {
        "g": 255,
        valueOf(a23) {
            a23.valueOf = a23;
            for (const v24 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v19);
                } catch(e26) {
                }
            }
            return 255;
        },
        [v19]: v19,
        "d": -1033928124,
    };
    return o27;
}
const v28 = f18();
const v29 = f18();
const v30 = f18();
function f34(a35, a36, a37, a38) {
    const o52 = {
        ...a37,
        ...v29,
        "g": 4.0,
        set a(a40) {
            a40[a35] = a40;
            try { a40(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o52;
}
const v53 = f34(v30, 1000000000000.0, 1000000000000.0, 1000000.0);
f34(v29, 1000000000000.0, 1000000000000.0, 1000000.0);
const v55 = f34(v28, 4.0, 4.0, 1000000000000.0);
for (let [v60,,...v61] of "K2u95") {
}
const o62 = {
    __proto__: v53,
    4037: v29,
    "a": v30,
};
const o66 = {
    "h": 1000000.0,
    ...v55,
    "get": BigInt64Array,
    ...16,
    "f": f34,
    "c": f34,
    "b": v28,
    get a() {
        while (0 < this) {
        }
        return this;
    },
};
