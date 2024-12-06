function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = this;
    this.f = -256;
    this.h = F0;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v4;
}
const v9 = new F6(v5);
new F6(v9);
new F6(F0);
function f15() {
}
new Uint8Array(0);
[-8,4294967295,148900462];
let v29 = RegExp.bind("2147483647", 9);
const v31 = new Int32Array(127);
v29 /= v31;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
