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
const v17 = new F13(128, 48288);
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
    return F13;
}
const v35 = Array(3131);
class C37 extends Array {
    constructor(a39, a40, a41) {
        super(a39);
    }
}
const v42 = new C37(v35, C37, C37);
const o43 = {
    "e": 3131,
    [-2]: v18,
    "unscopables": -3252,
    "b": v27,
    "d": -9007199254740992,
    "f": Int16Array,
    1815: v29,
    "g": 2602,
    "d": C37,
    ...v17,
};
const v45 = new Proxy(Array, o43, Proxy, Proxy);
v35.splice(3131, 255, v45, v42, f12, v35);
