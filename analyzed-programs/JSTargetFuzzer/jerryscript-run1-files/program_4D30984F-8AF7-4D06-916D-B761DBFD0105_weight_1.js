const v2 = new Uint32Array();
const v4 = -2.0 - v2;
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a13;
    v4.e = a13;
}
const v14 = new F10(10n, 6n);
let v15 = new F10(10n, 536870887n);
const v16 = new F10(10n, 6n);
function f17(a18, a19, a20, a21) {
    const o33 = {
        [a18]: "bigint",
        set d(a23) {
            v15 >>= a23;
            this[1000] = 10n;
            Math.sinh(v16, v15, v14);
            Math.clz32(-3.0);
            Math.ceil((-3.0) ** -3.0);
            Math.min(10n);
            Math.atan2(v16, 3);
        },
    };
    return o33;
}
const v35 = f17(6n, f17(10n, f17, 10n, 6n), v14, v15);
f17(6n, "setInt16", v16, v15);
function F37() {
    if (!new.target) { throw 'must be called with new'; }
}
const v39 = new F37();
class C40 extends F37 {
}
const v41 = new C40();
[F37,F37,F37,F37];
const v45 = ([v41,v41])[536870912];
let v46;
try { v46 = v45(); } catch (e) {}
const v48 = new Uint8Array(v35, v45, v46);
const v50 = new Uint8ClampedArray(C40, v46, v46);
const v51 = ("seal").replaceAll(v46, v46);
v50["set"](v39);
const v54 = v48[f17];
try { new Uint8Array(v51, v41, v54, v54, ...v46); } catch (e) {}
