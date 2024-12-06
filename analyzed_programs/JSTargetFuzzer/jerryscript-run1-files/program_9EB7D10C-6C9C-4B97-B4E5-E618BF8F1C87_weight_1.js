function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9;
    this.a = 9;
    this.d = 9;
}
new F0();
new F0();
new F0();
new Float32Array(2);
new Int8Array(6);
new BigUint64Array(3);
function f15() {
}
new Uint8Array(0);
let v29 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v31 = new Int32Array(127);
v29 /= v31;
const v33 = [];
const o35 = {
    p() {
        this[v33] = this;
        return v33;
    },
};
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
