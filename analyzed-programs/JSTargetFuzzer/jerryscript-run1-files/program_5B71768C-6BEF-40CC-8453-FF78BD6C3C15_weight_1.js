function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -15;
    this.b = -15;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12) {
    const o22 = {
        "replace": v4,
        "f": 8,
        "h": a11,
        "d": a10,
        [-1](a14, a15, a16, a17) {
            a11[a12] = a12;
            a16 + a14;
            const o19 = {
            };
            new Proxy(a15, o19);
            v5[this] >>>= 8;
            return a10;
        },
    };
    return o22;
}
const v23 = f9(v5, v5, -1);
f9(f9(v5, v3, 1), v3, -1);
new Date();
function f28() {
    return v23;
}
function f29() {
}
new Uint8Array(0);
let v43 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v45 = new Int32Array(127);
v43 /= v45;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
