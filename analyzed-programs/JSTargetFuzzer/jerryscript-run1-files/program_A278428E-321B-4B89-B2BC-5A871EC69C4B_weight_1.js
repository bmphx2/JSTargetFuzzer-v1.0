function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 2147483649;
    this.c = 2147483649;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a9;
    this.c = v4;
}
new F7(v3);
new F7(v4);
new F7(v3);
[9007199254740991,-1927721476,512];
[-1911894596,257,-5,-9223372036854775808,-2100485767,65537,512];
[536870912,3];
function f18() {
}
new Uint8Array(0);
let v32 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v34 = new Int32Array(127);
v32 /= v34;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
