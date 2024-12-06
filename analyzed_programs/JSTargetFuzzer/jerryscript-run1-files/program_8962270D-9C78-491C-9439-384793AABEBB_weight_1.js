new Map();
new WeakSet();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a15;
}
const v16 = new F10(1.0, 65536n, 65536n, 1000000000.0);
new F10(1.0, -731332317n, -11n, WeakSet);
const v18 = new F10(-2.220446049250313e-16, -731332317n, -11n, v16);
let v19 = undefined;
const o22 = {
    "f": v18,
    "h": 1.0,
    "a": -2.220446049250313e-16,
    "d": -11n,
    [F10]: Map,
    get c() {
        return v19 = arguments;
    },
};
const o29 = {
    ...o22,
    [Map](a24, a25) {
        return a25;
    },
};
