const v4 = new WeakMap();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v4.a = a8;
    this.d = v4;
    this.g = a8;
}
new F5(0.3204700231884542, 5.0);
new F5(5.0, 5.0);
new F5(Infinity, Infinity);
for (let v12 = 0; v12 < 32; v12++) {
    v4["p" + v12] = v12;
}
function f21() {
}
new Uint8Array(0);
let v35 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v37 = new Int32Array(127);
v35 /= v37;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
