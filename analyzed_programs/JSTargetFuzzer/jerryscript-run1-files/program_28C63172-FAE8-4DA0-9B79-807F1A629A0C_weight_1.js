const v1 = new WeakSet();
const v2 = [WeakSet,v1,v1,v1];
const v3 = [v2,WeakSet,v2,v1,v1];
const v4 = [WeakSet,v1,v1,v3];
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
}
new F8(v2, v2, v3);
new F8(v4, v3, v3);
new F8(v3, v3, v3);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F16;
    this.valueOf = -65537 in this;
    for (let v20 = 0; v20 < 32; v20++) {
        this["p" + v20] = v20;
    }
    this.f = -65537;
}
let v23 = new F16();
new F16();
const v25 = new F16();
new Uint32Array(5);
new Int32Array(5);
const v34 = new Uint8Array(150);
function f35() {
}
let v36 = 0;
do {
    v25 / v25;
    v36++;
} while (v36 < 9)
function f47(a48, a49) {
    const o50 = {
    };
    return o50;
}
([8,536870912])["find"](f47, "find");
new Uint8Array(0);
let v61 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v63 = new Int32Array(127);
const v64 = ("2147483647")[11];
v34 instanceof v61;
RegExp[8] = 4.0;
const t46 = "2147483647";
t46.__proto__ = v25;
Uint32Array < v64;
v61 /= v63;
const v68 = new WeakSet();
const v74 = new BigInt64Array(2);
127 instanceof Int32Array;
function f77() {
    return v74;
}
v23 = v68;
([5]).reverse();
