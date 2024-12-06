function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.a = f0;
    this.d = f0;
}
new F1();
new F1();
const v5 = new F1();
const v6 = [v5];
const v7 = [v5,v6,F1];
[v7];
const v10 = new WeakSet();
v10 ** v10;
v6[v7] = F1;
function f13() {
    return v6;
}
new Int8Array(127);
new Int16Array(16);
new Uint8Array(128);
const v23 = [];
const v25 = new Int16Array();
function f26(a27, a28) {
    const v29 = v25[-1];
    Object.defineProperty(v29, v23, { writable: true, value: v29 });
    return Int16Array;
}
const v32 = -26144 % -26144;
v32 + v32;
new Promise(f26);
