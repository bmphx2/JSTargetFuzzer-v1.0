function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 64;
}
new F3(1073741824);
new F3(64);
new F3(64);
new Array(190);
new Uint8ClampedArray(11);
new BigUint64Array(128);
new Float32Array(3);
function f21() {
}
new Uint8Array(0);
let v35 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v37 = new Int32Array(127);
v35 /= v37;
new WeakSet();
new BigInt64Array(BigInt64Array);
([5]).reverse();
