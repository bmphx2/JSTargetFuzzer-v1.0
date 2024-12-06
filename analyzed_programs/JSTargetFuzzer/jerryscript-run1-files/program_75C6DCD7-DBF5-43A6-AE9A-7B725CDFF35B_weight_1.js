function f0() {
}
class C1 {
    [f0];
    m() {
        try {
            function f3() {
                return f0;
            }
        } catch(e4) {
            Object.defineProperty(e4, 224000586, { set: f0 });
        }
        return this;
    }
    static [f0];
}
new C1();
const v6 = new C1();
const v7 = new C1();
function f11() {
    return f0;
}
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
    this.f = -1024;
}
new F12(11894, v6, v6, v7);
const v19 = new F12(11894, v6, v6, v7);
new F12(-1024, v7, v6, v19);
new BigInt64Array(256);
const v29 = new Uint32Array(227);
new Uint16Array(129);
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a36;
}
new F33(256, 129);
new F33(v29, 227);
new F33(v29, 129);
function f40() {
}
new Uint8Array(227);
let v54 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v54);
v54 /= v54;
new WeakSet();
const v65 = Int8Array / +(4 / Int8Array);
Math.min([NaN,1000000.0], v65);
const v71 = new Uint8Array();
v71.includes();
new BigInt64Array(2);
([5]).reverse();
