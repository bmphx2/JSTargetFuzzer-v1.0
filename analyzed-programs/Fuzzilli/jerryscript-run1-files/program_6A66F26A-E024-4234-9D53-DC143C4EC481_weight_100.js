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
const v25 = f7(v5);
const v26 = f7(v3);
new Int32Array(10);
new Int16Array(853);
new Int16Array(770);
const v41 = new Int32Array(5);
const v44 = new Int16Array(2602);
try { v41.reduce(f7); } catch (e) {}
v44[Symbol.toStringTag] = v3;
new Int16Array(189);
function f54() {
    return 4;
}
function F55(a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 128;
    a58.d = 128;
    this.f = 128;
}
const v59 = new F55(128, 48288);
const v60 = new F55(128, 4);
const v61 = new F55(4, 128, v60, F55);
function F65(a67, a68) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -47122;
    F55.e = 5;
}
const v69 = new F65(F55, -47122);
new F65(Int32Array, 2602);
const v71 = new F65(v61, -9007199254740992);
Array[Array];
function f74() {
    return Array;
}
function f75() {
    return v26;
}
const v77 = Array(3131);
class C79 extends Array {
    constructor(a81, a82, a83) {
        super(a81);
    }
    5 = -47122;
    2147483647 = v25;
    static 4;
    static 65537;
    d = Int16Array;
}
const v84 = new C79(v77, C79, C79);
const o85 = {
    "e": 3131,
    [-2]: v60,
    "unscopables": 189,
    "b": v69,
    "d": -9007199254740992,
    "f": Int16Array,
    1815: v71,
    "g": 2602,
    "d": C79,
    ...v59,
};
const v87 = new Proxy(Array, o85, Proxy, Proxy);
v77.splice(3131, 255, v87, v84, f54, v77);
