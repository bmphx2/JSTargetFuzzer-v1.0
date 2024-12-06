function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.c = f0;
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
let v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F1;
    this.h = F1;
    this.e = F1;
}
let v9 = new F6(v3);
const v10 = new F6(v3);
const v11 = v10.h;
let v12;
try { v12 = new v11(v10, F1, v5, v5); } catch (e) {}
F6[9] = v12;
v5 = v11;
F1 !== v4;
new F6(v3);
const v16 = [2.5870964546644305e+306];
for (let v17 = 0; v17 < 5; v17++) {
    v16["p" + v17] = v17;
}
v16["unshift"]();
function f24() {
}
let v28 = 4.0;
new Uint8Array(0);
let v38 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new WeakSet();
RegExp[-536870912] **= -9.720861708692185;
for (let v42 = 0; v42 < 32; v42++) {
    v4["p" + v42] = v42;
}
const v45 = new Int32Array(127);
v38 /= v45;
new WeakSet();
new BigInt64Array(2);
15 * v16;
({"h":v9,} = v10);
RegExp(v9);
v28 = -9.720861708692185;
new f24();
([5]).reverse();
