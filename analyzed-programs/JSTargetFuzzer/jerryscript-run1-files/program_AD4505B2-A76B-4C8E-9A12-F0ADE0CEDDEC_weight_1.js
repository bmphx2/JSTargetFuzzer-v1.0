function f0() {
    const o10 = {
        "g": 10235,
        get b() {
            try { new this(-1073741824, 5, this); } catch (e) {}
            function f6() {
                return 10235;
            }
            this[Symbol.unscopables];
            return f6;
        },
        "e": -1073741824,
        "d": -1073741824,
        "h": 5,
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
function f14(a15) {
    const o26 = {
        ...v12,
        9: v13,
        "c": f0,
        __proto__: v13,
        "a": f0,
        ...a15,
        construct(a17, a18) {
            const o21 = {
                "maxByteLength": 1024,
            };
            const v23 = new ArrayBuffer(8, o21, this, 8, f0);
            new Int16Array(v23);
            return v11;
        },
    };
    return o26;
}
f14(v13);
f14(v11);
f14(v12);
new Uint8Array(1);
new Int32Array(129);
new Int8Array(306);
function F51(a53, a54, a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a56;
    this.f = -4294967296;
}
new F51(-4294967296, 5n, "global", "-16");
new F51(-4294967296, -7n, "-16", "global");
const v59 = new F51(-4294967296, 5n, "global", "global");
if ("function" == v59) {
} else {
    function F64(a66, a67, a68) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a68;
    }
    const v69 = new F64(F64, "global", "function");
    new F64(v69, "global", "function");
    new F64(v69, "global", "function");
}
