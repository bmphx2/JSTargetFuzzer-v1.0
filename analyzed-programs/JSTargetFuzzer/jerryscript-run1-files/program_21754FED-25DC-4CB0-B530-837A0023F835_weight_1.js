function f12() {
    const v13 = -Infinity;
    const o21 = {
        "g": 255,
        valueOf(a17) {
            a17.valueOf = a17;
            for (const v18 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v13);
                } catch(e20) {
                }
            }
            return 255;
        },
        [v13]: v13,
        "d": -1033928124,
    };
    return o21;
}
const v22 = f12();
const v23 = f12();
const v24 = f12();
function f28(a29, a30, a31, a32) {
    const o46 = {
        ...v23,
        "g": 4.0,
        set a(a34) {
            a34[a29] = 2147483647n;
            try { a34(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o46;
}
const v47 = f28(v24, 1000000000000.0, 1000000000000.0, 1000000.0);
const v48 = f28(v23, 1000000000000.0, 1000000000000.0, 1000000.0);
let v49 = 0;
while (v49 < 8) {
    for (let v52 = 0; v52 < 29; v52++) {
        v23.g >>>= 1000000.0;
    }
    function F53(a55, a56, a57) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = v23;
        this.f = 1166699251;
    }
    new F53(v23, 1073741823n, F53);
    new F53(v23, 1073741823n, v47);
    new F53(v23, 749288358n, 2147483647n);
    Math.trunc(2147483649);
    --f12;
    --f12;
    v49++;
}
const v68 = f28(v22, 4.0, 4.0, 1000000000000.0);
const o72 = {
    __proto__: v47,
    4037: v23,
    "a": v24,
    "b": 2147483647n,
    ...v48,
    "e": 6,
    [1073741823n]: 2101265035n,
    "d": 6,
};
const o75 = {
    "h": 4.0,
    ...v68,
    "f": f28,
    get d() {
        try { v68.setInt16(this, 4.0, f12, this); } catch (e) {}
        b = v24;
        return 13364;
    },
    "c": f28,
    "b": v22,
};
