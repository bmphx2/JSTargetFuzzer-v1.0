function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a10;
}
const v12 = new F6(-8, 1000.0, -8, 1000.0);
const v13 = new F6(-1720031392, 1000.0, F6, NaN);
const v14 = new F6(-1720031392, 3.0, v13, NaN);
const v15 = v12[536870888];
let v16;
try { v16 = v15(v13, 2029135547, v15); } catch (e) {}
try { v15(v13, F6, v15, v15, v16); } catch (e) {}
function f21(a22, a23, a24, a25) {
    const o31 = {
        ...v14,
        __proto__: v14,
        n(a27, a28) {
            try { a25["isView"]("isView", a24); } catch (e) {}
            return v12;
        },
        "b": -8,
        "c": a22,
        "h": a24,
        249: a22,
        "d": a24,
        "a": a25,
    };
    return o31;
}
f21(3.0, v12, -8, v13);
f21(3.0, v12, 2029135547, v12);
f21(3.0, v13, 2029135547, v14);
const v36 = new Float32Array();
const v37 = v36 ** v36;
const v39 = new Uint16Array(v37);
const v41 = [0.6387791118026842,1e-15,409.2759620327208,0.22187403463030897,242932.2067316887,-0.3239415380988362,2.502916689889151,-1.0];
delete v41[v37 < v39 ? v37 : v39];
v41.reverse();
