function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 257;
    this.b = 257;
    this.d = 257;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12, a13) {
    const o20 = {
        "b": a12,
        ...v4,
        195: -31634,
        set f(a15) {
            let v16;
            try { v16 = a15(a15, a15, F0, a15, v3); } catch (e) {}
            v16[8] = v16;
        },
        ...a10,
        "d": a12,
        "a": F0,
        "g": F0,
    };
    return o20;
}
f9(f9(v5, 13, F0, 10), v5, v4, v5);
f9(v3, -31634, 13, v5);
let v28 = 536870912;
let v29 = 1073741824;
class C30 {
    constructor(a32) {
        let v33 = 127 + v29;
        v28 *= v33;
        v33++;
        127 && 31657;
        Math.atanh(31657);
        Math.log10(31657);
        v29 ^ 127;
        --v29;
    }
}
const v42 = new C30(v29, f9);
const v43 = new C30(v29);
new C30(v29);
v43.f = v42;
let v52 = 1470252707;
const v53 = v52++;
Math.log1p(v53);
65536 << v53;
for (let v56 = 0; v56 < 32; v56++) {
    C30["p" + v56] = v56;
}
