function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.b = a5;
    this.e = 0.0;
}
new F3(NaN);
new F3(0.0);
const v8 = new F3(0.0);
new Int8Array(1312);
new Float64Array(8);
new Int32Array(1921);
const v23 = new BigInt64Array(256);
const v26 = new Uint32Array(227);
const v29 = new Uint16Array(129);
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a33;
}
const v34 = new F30(256, 129);
new F30(v26, 227);
new F30(v26, 129);
function f37() {
}
new Uint8Array(227);
let v51 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v51);
v51 /= v51;
new WeakSet();
new F30(WeakSet, v29);
for (let v59 = 0; v59 < 32; v59++) {
    v34["p" + v59] = v59;
}
new BigInt64Array(2);
const v72 = [5];
v23.length = 10;
v8[4.0] = Int32Array;
v72.reverse();
