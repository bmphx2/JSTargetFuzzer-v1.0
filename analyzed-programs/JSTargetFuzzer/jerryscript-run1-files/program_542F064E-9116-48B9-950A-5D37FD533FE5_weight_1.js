function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967297;
}
const v6 = new F3(-14);
const v7 = new F3(9223372036854775807);
const v8 = new F3(9223372036854775807);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
}
const v15 = new F9(v8, v7, -14, -4294967297);
const v16 = new F9(v6, F3, 9223372036854775807, -14);
const v17 = new F9(v8, v16, -4294967297, v16);
function f18(a19, a20, a21, a22) {
    const o29 = {
        ...a22,
        n(a24, a25) {
            let v26;
            try { v26 = v7(a21, -14, a25, a22, -4294967297); } catch (e) {}
            a25 = v17;
            try {
                super.m(F9, v26);
            } catch(e28) {
            }
            return v6;
        },
        ...v17,
        65536: v15,
        6: v7,
        "e": v8,
        "d": a20,
    };
    return o29;
}
f18(f18(v7, 9223372036854775807, -14, v6), -14, -14, f18(v8, -14, -14, v6));
const v34 = new Uint32Array();
const v36 = 125563.20783278253 - v34;
const v37 = [1.7976931348623157e+308,-7.132348077024275,-55.152548489457104];
v37[65535n] = v36;
for (let v39 = 0; v39 < 5; v39++) {
    v37.splice(-14);
}
