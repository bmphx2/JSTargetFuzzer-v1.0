const v2 = [];
function f3() {
    return v2;
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F4(v2, v2, v2);
const o11 = {
    "defineProperty": f3,
};
const v13 = new Proxy(v9, o11);
function f14() {
    return f14;
}
function f15() {
    return o11;
}
Object.defineProperty(v13, -16, { configurable: true, get: f15, set: f14 });
new Int16Array(68);
const v19 = new Float32Array(4);
if (Float32Array > 4) {
    try { v19.some(v19); } catch (e) {}
} else {
}
new Int16Array(2110, 4);
new WeakSet();
"21830" + 234;
