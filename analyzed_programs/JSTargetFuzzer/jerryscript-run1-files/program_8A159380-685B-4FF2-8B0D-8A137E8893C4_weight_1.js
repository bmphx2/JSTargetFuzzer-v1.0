new Int8Array(257);
new Float32Array(256);
new Uint8ClampedArray(5);
function f12() {
    let v15 = "message";
    const o20 = {
        get a() {
            let v17;
            try { v17 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v15 = v17;
            try {
                super.n();
            } catch(e19) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v15,
    };
    return o20;
}
SyntaxError(SyntaxError);
class C23 extends Float32Array {
}
("1073741824").match(f12);
const v26 = f12();
f12();
const v28 = f12();
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a34;
    this.d = 1073741825;
}
const v37 = new F32(v28, v28, 3);
const v38 = new F32(v37, v26, 3);
new F32(v26, v38, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);
