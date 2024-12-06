function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1073741824;
    this.b = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v6 = F0 >>> (v4 - v4);
delete v3[v3];
try {
    Object.defineProperty("u", 2, { configurable: true, set: Symbol });
} catch(e11) {
}
new F0();
const o13 = {
};
const o17 = {
    set h(a15) {
        with (Math) {
        }
    },
};
new Proxy(v3, o13);
const v20 = new F0();
function f24() {
    function f25(a26, a27, a28) {
        -12n & -14669;
        Number();
        v20[a26];
        a26 = a27;
        return a27;
    }
    f25(v4, v20, v6);
    return 2147483649;
}
function f36(a37, a38, a39, a40) {
    const o49 = {
        m(a42, a43, a44, a45) {
            a45.__proto__ = a44;
            return a42;
        },
        "a": 6552561,
        "b": a39,
        "e": 2147483649,
        "d": 2147483649,
        "g": f24,
    };
    return o49;
}
f36(5, v20, 5, v4);
f36(6552561, f24, 2147483649, f36(5, 5, 5, v3));
const v55 = new Int32Array(2083);
new Uint8Array(255);
const v61 = new Int16Array(7);
function f62(a63, a64, a65) {
    const o72 = {
        "h": Int32Array,
        set e(a67) {
            e = a64;
            [a65,a64];
            [v55];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v61,
        "b": Uint8Array,
        "c": 255,
        ...a63,
        1053877365: a64,
    };
    return o72;
}
const v73 = f62(2083, 255, 7);
const v74 = f62(v73, 7, 2083);
f62(f62, 255, 7);
v73[-2] &= 2083;
v61[-1] -= 7;
let v76 = 10;
for (; v76--;) {
    v74.h;
    v74[Symbol.toPrimitive] = 7;
}
