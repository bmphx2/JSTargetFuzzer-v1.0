function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 10;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Uint8ClampedArray(16);
const o14 = {
};
new Proxy(Uint8ClampedArray, o14);
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a20;
    this.b = Uint8ClampedArray;
}
const v22 = new F17(v5, -9223372036854775808n, 16);
const v23 = new F17(v5, 1594231102n, v22);
new F17(v5, -9223372036854775808n, v22);
new Uint32Array(16);
new Uint16Array(2614);
new BigInt64Array(256);
const v37 = new Uint32Array(227);
new Uint16Array(129);
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a44;
}
new F41(256, 129);
const v46 = new F41(v37, 227);
let v47 = new F41(v37, 129);
function f48() {
}
v47 = v46;
e = v3;
Object.defineProperty(v37, "length", { enumerable: true, get: f48 });
v23[v37] |= 2614;
f48();
new Uint8Array(227);
let v63 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v63);
v63 /= v63;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
