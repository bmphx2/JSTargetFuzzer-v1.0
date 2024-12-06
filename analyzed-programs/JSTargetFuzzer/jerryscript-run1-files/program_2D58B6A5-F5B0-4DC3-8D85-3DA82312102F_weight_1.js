function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 15;
    this.f = 15;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v5;
    this.c = v4;
}
const v10 = new F6(v3, v3);
const v11 = new F6(v5, v3);
new F6(v3, v4);
const v13 = [v3,v10];
const v14 = [v11,v3,F6,v10];
[v13,v4,v10];
new Int16Array(0);
function f23(a24, a25) {
    const o33 = {
        ...a25,
        "c": a25,
        "b": 1073741824,
        "e": a25,
        __proto__: a25,
        [3](a27, a28, a29) {
            try {
                super.m(a25, a27, a29, a27);
            } catch(e31) {
            }
            const v32 = this[8];
            a24 **= -33749;
            return v32;
        },
    };
    return o33;
}
f23(-33749, f23);
const v35 = f23(3, f23);
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a39;
}
new F36(1073741824, 3);
new Float32Array(3);
new Int16Array(3715);
function f46() {
    const v47 = -Infinity;
    v35.b;
    const o50 = {
        "call": f23,
        "get": f23,
        "isExtensible": f23,
        "ownKeys": f46,
        "preventExtensions": f46,
        "set": f46,
    };
    new Proxy(v14, o50);
    const o59 = {
        "g": 255,
        valueOf(a55) {
            a55.valueOf = a55;
            for (const v56 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v47);
                } catch(e58) {
                }
            }
            return 255;
        },
        [v47]: v47,
        "d": -1033928124,
    };
    return o59;
}
const v60 = f46();
const v61 = f46();
const v62 = f46();
function f66(a67, a68, a69, a70) {
    const o84 = {
        ...v61,
        "g": 4.0,
        set a(a72) {
            a72[a67] = a72;
            try { a72(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o84;
}
const v85 = f66(v62, 1000000000000.0, 1000000000000.0, 1000000.0);
f66(v61, 1000000000000.0, 1000000000000.0, 1000000.0);
const v87 = f66(v60, 4.0, 4.0, 1000000000000.0);
new EvalError(EvalError);
const v92 = [1073741824,9007199254740990,-65537,-49548,-65535,-205947021];
const v93 = [256,0,9007199254740992,9007199254740990,-2147483647,6,257];
function f94(a95, a96) {
    const o114 = {
        __proto__: v92,
        "b": v93,
        o(a98) {
            this ^ this;
            return a95;
        },
        set h(a101) {
            try { a101(a96, v93); } catch (e) {}
            switch (a95) {
                case v92:
                    const v107 = 1.948625827865868e+307 << 4;
                    a101 % 1.948625827865868e+307;
                    Math.exp(v107);
                    ~4;
                    !(~1.948625827865868e+307);
                    1.948625827865868e+307 / v107;
                    break;
            }
        },
    };
    return o114;
}
const o116 = {
    __proto__: v85,
    4037: v61,
    "a": v62,
};
const o117 = {
    "h": 1000000.0,
    ...v87,
    "f": f66,
    "c": f66,
    "b": v60,
};
