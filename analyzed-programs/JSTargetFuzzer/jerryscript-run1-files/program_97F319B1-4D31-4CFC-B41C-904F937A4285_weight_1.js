function f3() {
    with (7) {
        h = f3;
        Object.defineProperty(-268435456, 0, { writable: true, set: f3 });
    }
    return f3;
}
function f13(a14, a15) {
    function f16() {
        return a14;
    }
}
new Promise(f13);
new Float64Array(189);
new Uint8Array(f3);
new Float64Array(2125);
const v30 = new WeakSet();
const v31 = v30.add(v30);
v31.has(v31);
