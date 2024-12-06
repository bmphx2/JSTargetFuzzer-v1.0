function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f7(a8) {
    const o23 = {
        "b": v3,
        __proto__: a8,
        [v3](a10, a11, a12, a13) {
            new Uint16Array(3049);
            new Float32Array(16);
            const v22 = new Uint8Array(2455);
            return v22;
        },
    };
    return o23;
}
f7(v5);
f7(v5);
const v26 = f7(v3);
new Int32Array(10);
new Int16Array(853);
new Int16Array(770);
new Int32Array(5);
new Int16Array(2602);
new Int16Array(189);
function f48() {
    return 4;
}
function F49(a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 128;
    a52.d = 128;
    this.f = 128;
}
const v53 = new F49(128, 48288);
const v54 = new F49(128, 4);
const v55 = new F49(4, 128, v54, F49);
function F59(a61, a62) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -47122;
    F49.e = 5;
}
const v63 = new F59(F49, -47122);
new F59(Int32Array, 2602);
const v65 = new F59(v55, -9007199254740992);
Array[Array];
function f68() {
    return Array;
}
function f69() {
    return v26;
}
const v71 = Array(3131);
class C73 extends Array {
    constructor(a75, a76, a77) {
        super(a75);
    }
}
const v78 = new C73(v71, C73, C73);
const o79 = {
    "e": 3131,
    [-2]: v54,
    "unscopables": 189,
    "b": v63,
    "d": -9007199254740992,
    "f": Int16Array,
    1815: v65,
    "g": 2602,
    "d": C73,
    ...v53,
};
const v81 = new Proxy(Array, o79, Proxy, Proxy);
v71.splice(3131, 255, v81, v78, f48, v71);
