function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 9007199254740991;
    this.d = 9007199254740991;
}
new F0();
new F0();
new F0();
new Int8Array(8);
new Uint16Array(128);
new Float32Array(0);
function f18() {
}
new Uint8Array(0);
let v32 = Float32Array.bind("2147483647", [-8,4294967295,148900462]);
const v34 = new Int32Array(127);
v32 /= v34;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
