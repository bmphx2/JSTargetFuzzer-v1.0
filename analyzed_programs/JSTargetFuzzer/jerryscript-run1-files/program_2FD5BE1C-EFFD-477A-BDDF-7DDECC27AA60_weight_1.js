function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.a = f0;
    this.b = f0;
}
new f0();
const v4 = new F1();
const v5 = new F1();
new Map();
const v14 = [v5,-65536,f0,-2.7306800230110895];
[[v4],-5.916013142220351,-65536,v14,f0];
new BigInt64Array(256);
const v25 = new Uint32Array(227);
new Uint16Array(129);
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a32;
}
new F29(256, 129);
new F29(v25, 227);
const v35 = new F29(v25, 129);
function f36() {
}
let v45;
try { v45 = v35.valueOf(); } catch (e) {}
try { v45(F1, 0.0, v45, v45); } catch (e) {}
new Uint8Array(F1);
let v55 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v55);
v55 /= v55;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
