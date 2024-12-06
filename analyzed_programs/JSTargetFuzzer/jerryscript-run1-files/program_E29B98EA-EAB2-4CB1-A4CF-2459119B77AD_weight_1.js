function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.c = f0;
    this.a = f0;
}
const v3 = new F1();
new F1();
new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F1;
    this.h = F1;
    this.e = F1;
}
new F6(v3);
new F6(v3);
new F6(v3);
const v13 = [2.5870964546644305e+306];
for (let v14 = 0; v14 < 5; v14++) {
    v13["p" + v14] = v14;
}
v13["unshift"]();
function f21() {
}
new Uint8Array(0);
let v35 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v37 = new Int32Array(127);
v35 /= v37;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
