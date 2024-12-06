function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1073741825;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v4,v4,v5,v4];
const v7 = [v6,v4];
const v8 = [v5];
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a14;
    this.f = F0;
    this.a = -10;
}
const v16 = new F12(v7, v8);
const v17 = new F12(v8, v16);
new F12(v6, v17);
new Date();
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F21;
    this.valueOf = -65537 in F21;
    for (let v25 = 0; v25 < 32; v25++) {
        this["p" + v25] = v25;
    }
    this.f = -65537;
}
let v28 = new F21();
new F21();
const v30 = new F21();
new Uint32Array(5);
new Int32Array(5);
const v39 = new Uint8Array(150);
function f40() {
}
let v41 = 0;
do {
    v30 / v30;
    v41++;
} while (v41 < 9)
new Uint8Array(0);
let v59 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v61 = new Int32Array(127);
const v62 = ("2147483647")[11];
v39 instanceof v59;
RegExp[8] = 4.0;
const t49 = "2147483647";
t49.__proto__ = v30;
Uint32Array < v62;
v59 /= v61;
const v66 = new WeakSet();
const v72 = new BigInt64Array(2);
127 instanceof Int32Array;
function f75() {
    return v72;
}
v28 = v66;
([5]).reverse();
