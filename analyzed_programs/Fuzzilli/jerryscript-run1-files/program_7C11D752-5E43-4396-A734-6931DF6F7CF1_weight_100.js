new Float64Array(0);
new Int8Array(3);
new Uint8Array(0);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a14;
    this.e = a11;
    this.b = a11;
}
new F9(0, 3, 6, 6);
new F9(0, 6, 0, 6);
new F9(3, 6, 3, 3);
class C19 {
    p(a21, a22) {
        let v23;
        try { v23 = this.o("-256", a21, this); } catch (e) {}
        for (let v24 = 0; v24 < 5; v24++) {
            v23["p" + v24] = 6;
        }
    }
}
const v28 = new Uint16Array();
const v30 = new Uint8ClampedArray();
function f31() {
    return arguments;
}
f31(v28, v30);
v30["entries"]();
