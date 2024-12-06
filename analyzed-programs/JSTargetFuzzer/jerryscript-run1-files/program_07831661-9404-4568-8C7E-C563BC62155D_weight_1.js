function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1010860505;
}
const v3 = new F0();
new F0();
const v5 = new F0(F0);
const v8 = new Uint32Array(13);
const v11 = new Int16Array(13, 13, v3);
v8 instanceof F0;
13 >= v5;
let v16;
try { v16 = BigUint64Array(v11, 7, 7); } catch (e) {}
[[v11,v5],7,13];
[BigUint64Array,v5,v16,Int16Array];
new BigUint64Array(7);
function f21() {
}
new Uint8Array(0);
let v35 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v37 = new Int32Array(127);
v35 /= v37;
new TypeError();
new BigInt64Array(2);
([5]).reverse();
