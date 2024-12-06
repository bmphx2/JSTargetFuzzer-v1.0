function f0() {
}
function f1() {
    const o5 = {
        "g": f0,
        ...f1,
        "b": f0,
        [f0]() {
            f0();
            return e;
        },
        "a": f0,
        "e": f0,
        "d": f0,
    };
    return o5;
}
f1();
f1();
f1();
new Float64Array(231);
let v17 = 9007199254740992n;
v17--;
new BigInt64Array(256);
const v28 = new Uint32Array(227);
new Uint16Array(129);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a35;
}
new F32(256, 129);
new F32(v28, 227);
new F32(v28, 129);
function f39() {
}
new Uint8Array(227);
let v53 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v53);
v53 /= v53;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
