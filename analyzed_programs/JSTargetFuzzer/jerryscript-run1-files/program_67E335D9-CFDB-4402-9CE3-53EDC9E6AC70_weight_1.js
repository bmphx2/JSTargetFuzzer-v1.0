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
[[v5,[v5],F1]];
new WeakSet();
new Int8Array(127);
new Int16Array(16);
new Uint8Array(128);
const v20 = [];
const v22 = new Int16Array();
function f23(a24, a25) {
    const v26 = v22[-1];
    Object.defineProperty(v26, v20, { writable: true, value: v26 });
    return Int16Array;
}
const v29 = -26144 % -26144;
v29 + v29;
new Promise(f23);
