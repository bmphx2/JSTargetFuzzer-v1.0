const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v0;
    this.g = v0;
}
new F1();
new F1();
new F1();
new BigUint64Array(126);
new Int32Array(129);
new Int8Array(727);
function f15() {
    const v16 = -Infinity;
    const o24 = {
        "g": 126,
        valueOf(a20) {
            a20.valueOf = a20;
            for (const v21 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v16);
                } catch(e23) {
                }
            }
            return 255;
        },
        [v16]: v16,
        "d": -1033928124,
    };
    return o24;
}
const v25 = f15();
const v26 = f15();
const v27 = f15();
function f31(a32, a33, a34, a35) {
    const o49 = {
        ...v26,
        "g": 4.0,
        set a(a37) {
            a37[a32] = a37;
            try { a37(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o49;
}
const v50 = f31(v27, 1000000000000.0, 1000000000000.0, 1000000.0);
f31(v26, 1000000000000.0, 1000000000000.0, 1000000.0);
const v52 = f31(v25, 4.0, 4.0, 1000000000000.0);
const o56 = {
    __proto__: v50,
    4037: v26,
    "a": v27,
};
const o57 = {
    "h": v52,
    ...v52,
    "f": f31,
    "c": f31,
    "b": v25,
};
