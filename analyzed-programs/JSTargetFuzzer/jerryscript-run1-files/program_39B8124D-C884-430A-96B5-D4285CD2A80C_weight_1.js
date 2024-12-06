function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 129;
}
new F0();
new F0();
new F0();
new Uint8Array(16);
new Uint16Array(20);
new Int32Array(15);
function f18() {
}
new Uint8Array(0);
let v32 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v34 = new Int32Array(127);
v32 /= v34;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
