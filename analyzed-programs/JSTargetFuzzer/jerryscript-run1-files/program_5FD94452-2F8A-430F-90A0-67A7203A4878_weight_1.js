function f1() {
    return undefined;
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
}
new F10("undefined", "undefined");
new F10("undefined", 1673886345);
const v16 = new F10("PI", f1);
v16.c = f1;
v16[0] = false;
new BigInt64Array(256);
const v31 = new Uint32Array(227);
new Uint16Array(129);
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a38;
}
new F35(256, 129);
new F35(v31, 227);
new F35(v31, 129);
function f42() {
}
new Uint8Array(227);
let v56 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v56);
v56 /= v56;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
