function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a6;
}
new F3(F3, 129);
new F3(-1024, 129);
new F3(129, -9007199254740992);
const v17 = Symbol.toPrimitive;
const o22 = {
    [v17]() {
        return -9007199254740992;
    },
};
function f23() {
}
new Uint8Array(0);
let v37 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v39 = new Int32Array(127);
v37 /= v39;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
