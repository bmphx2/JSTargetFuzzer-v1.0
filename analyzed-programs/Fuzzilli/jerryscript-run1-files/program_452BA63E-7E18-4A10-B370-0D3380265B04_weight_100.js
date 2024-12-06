const v2 = new Float64Array(1024);
new Uint16Array(1418);
const v8 = new Uint8Array(3);
function f9() {
    return 3;
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    this.d = a12;
}
const v15 = new F10(Uint8Array, 1418, f9);
const v16 = new F10(Uint16Array, 1418, v2);
new F10(v15, v8, v15);
const v18 = f9();
function f19(a20, a21, a22) {
    function F23(a25, a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = v16;
    }
    const v28 = new F23(f9, a20, a20);
    new F23(v28, v18, a20);
    const v30 = new F23(v2, a20, 3);
    return v30;
}
f19(v18, v16, v16);
