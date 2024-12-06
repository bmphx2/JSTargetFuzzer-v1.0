function f0() {
}
function f1() {
    const o3 = {
        get a() {
            let v2 = this;
            Object.defineProperty(v2, "d", { writable: true, configurable: true, get: f0 });
            v2 |= v2;
            return v2;
        },
        "g": f0,
        "d": f0,
        [f0]: f0,
        "f": f0,
        ...f0,
        "c": f0,
    };
    return o3;
}
const v4 = f1();
const v5 = f1();
const v6 = f1();
const v10 = [f1,v4,1073741824n,1073741824n];
const v11 = [1073741824n,f0,f0];
const v12 = [v10,9007199254740990n,f1,v11];
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v11;
    this.a = v6;
    this.h = v5;
}
new F17(v5, F17, -8.893894126073225e+307, v4);
new F17(v6, v10, 2.2250738585072014e-308, v5);
const v25 = new F17(v5, F17, -8.893894126073225e+307, v5);
new BigInt64Array(256);
const v30 = new Uint32Array(227);
new Uint16Array(129);
function F34(a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    v5.f = a37;
}
new F34(256, 129);
new F34(v30, 227);
new F34(v30, 129);
function f41() {
}
v25[2.2250738585072014e-308] = f0;
Object.defineProperty(v12, 246, { writable: true, value: f1 });
Math.atan(-895710.7076259514);
Math.sqrt(227);
227 * 268435439;
-895710.7076259514 >>> v25;
new Uint8Array(227);
let v62 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v62);
v62 /= v11;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
