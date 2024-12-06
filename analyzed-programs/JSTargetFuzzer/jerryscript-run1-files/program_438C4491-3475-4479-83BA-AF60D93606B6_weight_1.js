function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1599977233;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 4.0;
    this.e = v3;
    this.d = a13;
}
new F9(v4, v3, Infinity);
const v15 = new F9(v3, v5, v3);
const v16 = new F9(v15, v15, F0);
function f17(a18, a19) {
    const o26 = {
        get b() {
            return f17;
        },
        ...a18,
        "b": v16,
        set f(a22) {
            const o23 = {
            };
            new Proxy(a22, o23);
        },
        "g": v5,
        [F0]: F0,
        ...v3,
        __proto__: v3,
        [Infinity]: v15,
        [-1000.0]: F0,
        "e": a19,
    };
    return o26;
}
const v27 = f17(v4, v5);
let v28 = -2.2250738585072014e-308;
class C30 {
    constructor(a32, a33) {
        a33 % -9007199254740992;
    }
}
new C30(-2.633910383015725, v28);
f17(v27, v4);
v28 &= v28;
function f38(a39, a40, a41, a42) {
    const o43 = {
        ...a39,
    };
    return a41;
}
f17(v16, v16);
new BigInt64Array(256);
const v53 = new Uint32Array(227);
new Uint16Array(129);
function F57(a59, a60) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a60;
}
new F57(256, 129);
new F57(v53, 227);
new F57(v53, 129);
function f64() {
}
new Uint8Array(227);
let v78 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v78);
v78 /= v78;
new WeakSet();
new BigInt64Array(2);
const v92 = ("-1604200484").replace;
try { v92(); } catch (e) {}
new BigInt64Array(512);
function f99() {
    return f99;
}
const v100 = [f99,f99,f99];
[v100,[v100,v100,v100]];
([5]).reverse();
