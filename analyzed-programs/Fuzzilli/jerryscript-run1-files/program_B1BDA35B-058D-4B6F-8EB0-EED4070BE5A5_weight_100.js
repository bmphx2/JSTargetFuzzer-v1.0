function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
    this.h = a6;
}
const v7 = new F3(-2122076842n, 8n);
const v8 = new F3(8n, 8n);
const v9 = new F3(8n, -2122076842n);
const v11 = new Set();
function f12() {
    return v11;
}
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a16;
    this.h = v9;
}
const v17 = new F13(-870461832n, v9);
const v18 = new F13(8n, v9);
const v19 = new F13(-2122076842n, v17);
function f20(a21, a22, a23) {
    const o29 = {
        [v8](a25, a26) {
            F3 in this;
            new Set(v17);
            return v18;
        },
        [v7]: -2122076842n,
        [F13]: a22,
        "h": v19,
        ...v19,
        ...v19,
        "d": Set,
        "b": a21,
        10: -2122076842n,
        "f": f12,
        ...a22,
    };
    return o29;
}
const v30 = f20(-2122076842n, v8, v19);
f20(-2122076842n, v18, v18);
const v32 = f20(-2122076842n, v17, v17);
f20(-870461832n, v7, v30);
try { v7["charAt"](f12); } catch (e) {}
delete v32[4294967295];
