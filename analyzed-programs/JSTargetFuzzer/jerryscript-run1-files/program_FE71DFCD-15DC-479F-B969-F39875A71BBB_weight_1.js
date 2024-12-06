const v2 = new Float64Array(127);
const v5 = new Uint8Array(256);
new Int8Array(6, 6, 256, v5);
function f9() {
    return Int8Array;
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v2;
    this.a = a14;
}
const v16 = new F10(6, 256, v5, 127);
new F10(256, 127, F10, 256, Uint8Array, v16, 256);
new F10(256, 256, f9, 6);
class C21 {
    static toString(a23) {
        const t16 = "object";
        t16[8] = -1.3575774297237313;
    }
}
try { F10.toString(); } catch (e) {}
