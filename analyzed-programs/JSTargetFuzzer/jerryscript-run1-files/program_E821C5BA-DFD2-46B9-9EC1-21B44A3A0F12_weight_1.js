const v2 = new Array(8);
function f3(a4) {
    const o9 = {
        "g": a4,
        ...v2,
        get a() {
            Array[this] = this;
            return v2;
        },
        "h": 8,
    };
    return o9;
}
const v10 = f3(f3);
const v11 = f3(f3);
const v12 = f3(Array);
function f13(a14, a15) {
    const o20 = {
        [a15]: v11,
        243: v12,
        ...v2,
        p(a17, a18) {
            this.e;
            super.g = a14;
            v12.g >>= a15;
            return a14;
        },
        "h": a14,
    };
    return o20;
}
f13(v12, v11);
Array(v10, v11);
f13(v11, f3);
new TypeError(256);
const v32 = new Uint32Array(227);
new Uint16Array(129);
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a39;
}
new F36(256, 129);
new F36(v32, 227);
new F36(v32, 129);
function f43() {
}
new Uint8Array(227);
let v57 = RegExp.bind(-2147483649n, [-28565,-128]);
new Int32Array(v57);
v57 /= v57;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
