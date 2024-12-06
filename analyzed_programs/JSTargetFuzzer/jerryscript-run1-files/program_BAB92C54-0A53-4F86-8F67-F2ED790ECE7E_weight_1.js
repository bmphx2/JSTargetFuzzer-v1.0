new Uint8Array(138);
new BigUint64Array(3723);
new Uint8ClampedArray(6);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a11;
    this.d = 3723;
}
const v14 = new F9(6, 6, 138);
const v15 = new F9(3723, 138, 138);
new F9(138, 3723, 138);
new Float64Array(0);
new Uint32Array(10);
const v25 = new Uint8Array(176);
function F26() {
    if (!new.target) { throw 'must be called with new'; }
}
const v28 = new F26();
with (v28) {
    function F29() {
        if (!new.target) { throw 'must be called with new'; }
        this.f = this;
        const v31 = v15[F29];
        try { v31(Uint8ClampedArray, v14, F29); } catch (e) {}
        F29 << F29;
        this.f = v25;
    }
    const v34 = new F29();
    with (v34) {
    }
}
