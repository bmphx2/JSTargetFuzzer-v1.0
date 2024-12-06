new WeakSet();
function f14() {
    return WeakSet;
}
function f15() {
    return f15;
}
const v18 = new Uint8ClampedArray(512);
try {
    Object.defineProperty(v18, 2, { configurable: true, enumerable: true, get: f14, set: f15 });
} catch(e19) {
} finally {
}
