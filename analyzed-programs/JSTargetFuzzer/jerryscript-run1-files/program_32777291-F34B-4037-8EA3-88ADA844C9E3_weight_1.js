function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    new Date();
    Date[-2] = Date;
    this.g = f0;
}
const v8 = new F1();
Math.max();
const v11 = new F1();
const v12 = new F1();
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v8;
    this.h = f0;
}
const v17 = new F13(v8, v8);
new F13(v11, v8);
const v19 = new F13(v12, v8);
[[[F1,v19,v17,f0],f0,v8],F1,f0,F1,F13];
new BigInt64Array(256);
const v34 = new Uint32Array(227);
let v35 = 1000;
const v37 = new Map();
v35 <<= v37.values();
new Uint16Array(129);
function F42(a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a45;
}
new F42(256, 129);
new F42(v34, 227);
new F42(v34, 129);
function f49() {
}
const v53 = new Int8Array([]);
const v55 = new Int32Array(Int32Array, Int32Array);
v55 > "451";
new Uint8Array(227);
let v70 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v70);
v70 /= v70;
function f74(a75, a76) {
    return a76;
}
v53["some"](f74);
new WeakSet();
Symbol.toPrimitive;
Array(10);
function f89(a90, a91, a92, a93) {
    return Array;
}
new BigInt64Array(2);
([5]).reverse();
