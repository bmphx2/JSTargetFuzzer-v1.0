const v2 = new Int16Array(221);
const v3 = (a4, a5, a6, a7) => {
    Object.defineProperty(v2, Int16Array, { configurable: true, value: a6 });
    a5 = Int16Array;
    a6[v3] *= 221;
    try { new Int16Array(a5, a7, ...a4, a6); } catch (e) {}
    function F12(a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a6;
    }
    return v3;
};
new Uint32Array(5);
new Uint8ClampedArray(8);
[8,221,5,Uint32Array];
[Uint32Array,8];
const v25 = [5,Int16Array];
new Uint8Array(2365);
new Uint16Array(136);
new Uint32Array(1000);
function F35() {
    if (!new.target) { throw 'must be called with new'; }
}
const t23 = "ql";
t23[91] = F35;
v25 != -65537n;
const t25 = eval(eval);
t25("__proto__");
