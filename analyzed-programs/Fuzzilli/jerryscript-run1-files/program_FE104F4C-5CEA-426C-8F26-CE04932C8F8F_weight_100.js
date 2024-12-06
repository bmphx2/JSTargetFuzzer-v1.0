function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.b = a5;
}
const v7 = new F3(-4294967297, 7151);
const v8 = new F3(-4294967297, 7151);
let v9 = new F3(v8, 16);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
    this.g = v9;
    this.h = v7;
}
const v14 = new F10(7151, v7);
const v15 = new F10(v9, v9);
const v16 = new F10(-4294967297, v7);
function f17() {
    return v15;
}
function f18(a19, a20) {
    const o29 = {
        o(a22, a23) {
            let v25;
            try { v25 = a23["has"]("has", "has", a23); } catch (e) {}
            v25 = v9;
            a22[a19] >>>= 7151;
            for (let v26 = 0; v26 < 32; v26++) {
                v7["p" + v26] = v26;
            }
            return this;
        },
        ...v8,
        [v7]: v14,
        ...a20,
    };
    return o29;
}
f18(v14, v14);
const v31 = f18(7151, v15);
f18(v31, v15);
const o33 = {
    "c": v8,
    "g": v7,
    __proto__: v8,
    "h": 7151,
    ...v31,
};
++v9;
f17();
[] = v16;
