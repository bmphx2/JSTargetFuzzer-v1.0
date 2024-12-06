function f0() {
    const o19 = {
        "d": 268435456,
        ..."number",
        "a": "number",
        ..."bigint",
        o(a5, a6) {
            const o7 = {
                __proto__: this,
                "d": a6,
            };
            const v9 = [268435456];
            Reflect.apply(("bigint").charCodeAt, this, v9);
            const o14 = {
                "maxByteLength": 1000,
            };
            const v16 = new SharedArrayBuffer(1000, o14);
            new Int32Array(v16);
            return v16;
        },
    };
    return f0;
}
const v20 = f0();
const v21 = f0();
const v22 = f0();
new WeakSet();
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a27;
    this.e = a28;
    this.f = a28;
}
new F25(v20, v21);
new F25(v20, v22);
new F25(v20, v22);
function f35() {
    const v36 = -Infinity;
    const o44 = {
        "g": 255,
        valueOf(a40) {
            a40.valueOf = a40;
            for (const v41 in v36) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v36);
                } catch(e43) {
                }
            }
            return 255;
        },
        [v36]: v36,
        "d": -1033928124,
    };
    return o44;
}
const v45 = f35();
const v46 = f35();
const v47 = f35(v20, v46, v46);
function f51(a52, a53, a54, a55) {
    const o69 = {
        ...v46,
        "source": 4.0,
        set a(a57) {
            a57[a52] = v47;
            try {
            const t0 = 28134;
            t0(this);
            } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o69;
}
const v70 = f51(v47, 1000000000000.0, 1000000000000.0, 1000000.0);
f51(v46, 1000000000000.0, 1000000000000.0, 1000000.0);
const v72 = f51(v45, 4.0, 4.0, 1000000000000.0);
const o76 = {
    __proto__: v70,
    2947590330: v22,
    "g": -10,
    "e": v70,
    ...v70,
    9: v70,
    4037: v46,
    "a": v47,
};
const o77 = {
    "h": WeakSet,
    ...v72,
    "f": f51,
    "c": f51,
    "b": v45,
};
