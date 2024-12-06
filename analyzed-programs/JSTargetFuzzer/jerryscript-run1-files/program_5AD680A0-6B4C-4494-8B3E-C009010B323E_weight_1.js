function f0() {
    const o8 = {
        "g": "symbol",
        p(a5, a6) {
            a6.__proto__;
            return "symbol";
        },
        "d": 128,
        "e": "symbol",
        6: -1000000000.0,
        1: 128,
        [128]: 128,
        ..."symbol",
        "c": "symbol",
        "f": "symbol",
        "a": -1000000000.0,
    };
    return o8;
}
let v9 = f0();
f0();
const v11 = f0();
const v16 = new WeakMap();
function f17(a18, a19) {
    const o32 = {
        "e": a18,
        "h": v9,
        ...v11,
        [a19]: v16,
        set g(a21) {
            try { new a21(a19, v16); } catch (e) {}
            super.e;
        },
        ...v11,
        [-1024n](a25, a26, a27, a28) {
            for (let v29 = 0; v29 < 58; v29++) {
                v9 = f0();
                a28 % a19;
            }
            return WeakMap;
        },
    };
    return o32;
}
f17(WeakMap, 32201n);
f17(f17(v16, 536870912n), 32201n);
function f36() {
    return 32201n;
}
new BigInt64Array(256);
const v45 = new Uint32Array(227);
new Uint16Array(129);
function F49(a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a52;
}
new F49(256, 129);
const v55 = new Set();
v55.entries() != 0;
new F49(v45, 227);
new F49(v45, 129);
function f61() {
}
new Uint8Array(227);
let v75 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v75);
v75 /= v75;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
