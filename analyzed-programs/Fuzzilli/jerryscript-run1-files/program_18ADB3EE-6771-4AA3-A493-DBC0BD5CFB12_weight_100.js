let v2 = 48288;
new Int32Array(5);
new Int16Array(2602);
new Int16Array(189);
function f12() {
    return 4;
}
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 128;
    this.d = 128;
    this.f = 128;
}
const v17 = new F13(128, v2);
const v18 = new F13(128, 4);
const v19 = new F13(4, 128, v18, F13);
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a26;
    this.e = 5;
}
const v27 = new F23(F13, -47122);
new F23(Int32Array, 2602);
const v29 = new F23(v19, -9007199254740992);
Array[Array];
function f32() {
    return Array;
}
function f33() {
    for (let v34 = 0; v34 < 32; v34++) {
        Array["p" + v34] = v34;
    }
    return F13;
}
const v38 = Array(3131);
class C40 extends Array {
    constructor(a42, a43, a44) {
        super(a42);
    }
}
const v45 = new C40(v38, C40, C40);
const o46 = {
    "e": 3131,
    [-2]: v18,
    "unscopables": -3252,
    "b": v27,
    "d": -9007199254740992,
    "f": Int16Array,
    1815: v29,
    "g": 2602,
    "d": C40,
    ...v17,
};
const v48 = new Proxy(Array, o46, Proxy, Proxy);
v2 = 128;
+-1755417859;
const v54 = -1755417859 && 3131;
Math.asinh(v54);
Math.fround(v54);
v38.splice(3131, 255, v48, v45, f12, v38);
