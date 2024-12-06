function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 65535;
    this.f = 65535;
    this.a = 65535;
}
new F0();
new F0();
new F0();
new Uint8Array(935);
new Int16Array(11);
new Uint32Array(129);
new WeakSet();
function f17() {
}
new Uint8Array(0);
let v31 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v33 = new Int32Array(127);
v31 /= v33;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
const v51 = new Date();
v51.setMinutes(-1, 7, -6279);
v51["setYear"]();
