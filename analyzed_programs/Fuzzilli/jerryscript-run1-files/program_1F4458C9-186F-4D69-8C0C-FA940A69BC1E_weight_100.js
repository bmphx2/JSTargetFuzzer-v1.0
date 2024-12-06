function f3() {
    return 4;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 128;
    this.d = 128;
    this.f = 128;
}
const v8 = new F4(128, 0);
const v9 = new F4(128, 4);
new F4(4, 128);
Array[Array];
function f16() {
    return Array;
}
function f17() {
    return F4;
}
const v19 = Array(3131);
class C21 extends Array {
    constructor(a23, a24, a25) {
        super(a23);
    }
}
const v26 = new C21(v19, C21, C21);
const o27 = {
    "g": 3131,
    [-2]: v9,
    "c": -3252,
    "d": C21,
    ...v8,
};
const v29 = new Proxy(Array, o27);
v19.splice(3131, 255, v29, v26);
