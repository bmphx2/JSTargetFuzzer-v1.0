function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v7 = new WeakSet();
function f8(a9, a10, a11) {
    const o20 = {
        1581: a9,
        "e": f0,
        __proto__: a9,
        1073741824: v4,
        ...a11,
        "g": a9,
        [v4](a13, a14) {
            super.h = a11;
            try { a10(WeakSet, WeakSet, a13, v7); } catch (e) {}
            return a10;
        },
        "b": F1,
        ...a9,
        [a11](a17, a18, a19) {
            v4[this] >>= a19;
            super.b = WeakSet;
            return f8;
        },
        "d": v3,
    };
    return o20;
}
const v21 = f8(v4, v5, v4);
const v22 = f8(v4, v21, v21);
const v23 = f8(v5, v4, WeakSet);
const v24 = [v3,v4];
const v25 = [v23];
const v26 = [f0];
v24.__proto__ = v3;
v26[v5] = v4;
new Int8Array(2);
const v35 = new Int8Array(7);
const v38 = new BigUint64Array(3611);
const v41 = new Int32Array(11);
const v44 = new Uint16Array(2);
const o46 = {
    __proto__: v25,
    ...v23,
    "f": v22,
    "d": v4,
};
new Int8Array(1812);
v41[268435441] <<= 11;
const v49 = Int8Array < v38;
if (v49) {
    const v54 = -v41;
    +(v41 / v54);
    const o57 = {
        "apply": f8,
        "call": f8,
        "defineProperty": f8,
        "deleteProperty": f8,
        "getPrototypeOf": f8,
        "has": f0,
        "isExtensible": f0,
        "set": f8,
    };
    new Proxy(Math, o57);
    const v60 = +10223;
    0.7287685177565071 << v41;
    +v54;
    v60 + 937;
} else {
    const v64 = v35[v35];
    let v67;
    try { v67 = v64(-3.750457243597415e+307, -3.750457243597415e+307, -3.750457243597415e+307, -3.0, ...1812); } catch (e) {}
    v21.valueOf = v67;
    delete o46[v64];
    const v69 = v44[2];
    let v71 = -2147483647;
    const v73 = 65537 & v71;
    Math.log(2);
    v49 % 2;
    +v73;
    Math.sign(v69);
    v71--;
    Math.clz32(v49);
}
