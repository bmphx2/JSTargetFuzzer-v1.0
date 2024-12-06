function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1000000000.0;
}
new F3(-1000000000.0);
new F3(-8.769035498207602e+307);
new F3(-1000000000.0);
new Int32Array(3);
new Int32Array(0);
new Int32Array(5);
new BigInt64Array(3);
const v26 = new Uint32Array(227);
new Uint16Array(129);
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 3;
}
new F30(0, 129);
new F30(v26, 227);
new F30(v26, 129);
function f37() {
}
new Uint8Array(227);
let v51 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v51);
v51 /= v51;
new WeakSet();
new BigInt64Array(5);
([5]).reverse();
