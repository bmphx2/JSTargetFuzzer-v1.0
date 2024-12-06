const v1 = new Map();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a12;
}
try { v1.keys(); } catch (e) {}
const o14 = {
};
new Proxy(v1, o14);
const v17 = new F8(-61343, F8, 1964588073);
new F8(1964588073, 1964588073, 6.351826999310922e+307);
const v19 = new F8(1964588073, F8, 156.7693767023261);
function f20(a21, a22, a23, a24) {
    const o36 = {
        [a24](a26, a27, a28) {
            v19[a26] &= a22;
            return 6.351826999310922e+307;
        },
        __proto__: v1,
        ...a22,
        ...v17,
        "h": v19,
        get f() {
            super.g;
            this.__proto__ = v17;
            try {
                super.toString(a22, 1964588073);
            } catch(e35) {
            }
            return -2147483647;
        },
    };
    return a21;
}
f20(-61343, -1, 156.7693767023261, 6.351826999310922e+307);
let v38 = f20(1964588073, 1964588073, -5.888293546869163, 156.7693767023261);
let v39 = 0;
do {
    v38 >>= o14;
    v39++;
} while (v39 < 9)
f20(1964588073, -1, 6.351826999310922e+307, 156.7693767023261);
function F47(a49, a50, a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    a50 != 5n;
}
const v54 = new F47(-4294967296, -7n);
for (let i56 = 0; 4 < 4; i56++) {
    const o62 = {
        "apply": 5n,
        "deleteProperty": f20,
        "getOwnPropertyDescriptor": f20,
        "getPrototypeOf": f20,
        "ownKeys": f20,
        "preventExtensions": f20,
    };
    new Proxy(v54, o62);
}
