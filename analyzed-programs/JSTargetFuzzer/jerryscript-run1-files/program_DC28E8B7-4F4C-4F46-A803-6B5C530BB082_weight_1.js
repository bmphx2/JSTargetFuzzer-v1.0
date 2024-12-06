function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.b = f0;
    this.c = f0;
}
const v3 = new F1();
new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = F1;
    this.f = F1;
}
new F6(v5);
new F6(v5);
new F6(v3);
const v17 = new Uint8Array(1);
const v20 = new Uint8Array(10);
new Int8Array(1024);
function f24() {
    return Uint8Array;
}
const v25 = [v20,Int8Array,1024,1024,f24];
try { v17.reverse(); } catch (e) {}
v5.c >>= 1024;
[[f24,v25,Uint8Array],Uint8Array];
function f35() {
    return Int8Array;
}
let v37 = -43723;
const v38 = 10 ** v37;
const v39 = ++v37;
-v38;
-10;
Math.asin(v39);
