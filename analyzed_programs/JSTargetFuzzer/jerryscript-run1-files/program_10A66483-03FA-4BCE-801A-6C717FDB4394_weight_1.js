function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v7 = new F3("Qm", "Qm");
const v8 = new F3("message", "Qm");
const v9 = new F3("message", "Qm");
function f10() {
    return v7;
}
class C11 {
    constructor(a13, a14) {
        new Int32Array(4);
        new Float64Array(6);
        new Uint16Array(214);
    }
}
const v24 = new C11(C11, v8);
new C11("message", v9);
new C11(v24, v7);
try { Array.from(Uint8ClampedArray, "Q"); } catch (e) {}
