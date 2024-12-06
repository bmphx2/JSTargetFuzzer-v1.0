function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9007199254740992;
    this.e = 9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new Uint16Array(Uint16Array, Uint16Array);
const o12 = {
    m(a9, a10, a11) {
        return this;
    },
};
Reflect.set(o12.m, v7);
function f16(a17, a18) {
    const o19 = {
        "e": F0,
        "h": v4,
        ...a17,
        __proto__: v3,
        "a": v4,
        1994: v5,
        1: a18,
        "g": a18,
        "f": v3,
        "b": a18,
        "c": v4,
        ...v5,
    };
    return o19;
}
const v20 = f16(v5, v3);
const v21 = f16(v5, v3);
const v22 = f16(v4, v5);
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v21;
    this.d = a25;
}
new F23(v21, v20, v21);
new F23(v20, v21, v4);
new F23(v4, v22, v5);
function f31() {
}
new Uint8Array(0);
let v45 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v47 = new Int32Array(127);
v45 /= v47;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
