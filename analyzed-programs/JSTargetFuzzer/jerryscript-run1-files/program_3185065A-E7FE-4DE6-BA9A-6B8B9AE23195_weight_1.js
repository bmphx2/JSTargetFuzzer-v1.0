const v1 = new WeakSet();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = WeakSet;
    this.d = v1;
    this.g = WeakSet;
}
const v5 = new F2(WeakSet);
const v6 = new F2(v5);
new F2(v1);
new Uint8ClampedArray(4096);
new Float32Array(v6);
new Float64Array(61);
function f17() {
}
new Uint8Array(0);
let v31 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v33 = new Int32Array(127);
v31 /= v33;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
