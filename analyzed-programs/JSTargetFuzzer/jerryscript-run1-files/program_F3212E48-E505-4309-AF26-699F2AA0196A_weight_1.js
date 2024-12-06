new BigInt64Array(4096);
new Uint8Array(4096);
new Float32Array(9);
function f11(a12, a13) {
    const v16 = Array.from(1);
    function F17(a19, a20, a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v23 = new F17(a13, 1, a13, v16);
    with (v23) {
        try { v16(Array); } catch (e) {}
    }
    return v23;
}
f11(f11, f11);
Math.max();
