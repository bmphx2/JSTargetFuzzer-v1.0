function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 65535n;
    this.h = -6;
}
const v10 = new F6(15n, 65535n);
new F6(v10, F6);
new F6(-9223372036854775807, 15n);
new Int32Array(128);
new Float32Array(50);
new Uint8Array(2);
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F22;
    this.a = -65537 in this;
    for (let v26 = 0; v26 < 32; v26++) {
        this["p" + v26] = v26;
    }
    this.f = -65537;
}
let v29 = new F22();
new F22();
const v31 = new F22();
new Uint32Array(5);
new Int32Array(5);
const v40 = new Uint8Array(150);
function f41() {
}
let v42 = 0;
do {
    v31 / v31;
    v42++;
} while (v42 < 9)
const v58 = [9223372036854775807n];
[2n,[v58,v58],-1290666896n];
~-37993n;
2n > 1;
new Uint8Array(0);
let v71 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v73 = new Int32Array(127);
const v74 = ("2147483647")[11];
v40 instanceof v71;
RegExp[8] = 4.0;
const t44 = "2147483647";
t44.__proto__ = v31;
Uint32Array > v74;
v71 /= v73;
const v78 = new WeakSet();
const v84 = new BigInt64Array(2);
127 instanceof Int32Array;
function f87() {
    return v84;
}
v29 = v78;
([5]).reverse();
