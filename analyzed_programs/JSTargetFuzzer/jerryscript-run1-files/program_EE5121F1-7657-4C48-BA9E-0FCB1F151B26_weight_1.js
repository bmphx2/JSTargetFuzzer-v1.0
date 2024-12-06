function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -12;
    this.e = -12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f7(a8, a9, a10, a11) {
    return a11;
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F12(F12, f7);
const v17 = [-658853788,-256];
try {
const t0 = -4294967295;
t0(v16, f7, ...v17);
} catch (e) {}
const v20 = new WeakMap();
function f21(a22, a23) {
    const o30 = {
        __proto__: v20,
        ...a22,
        [v3](a25, a26, a27, a28) {
            let v29;
            try { v29 = a28(WeakMap, a28, a28); } catch (e) {}
            v5.toString = v29;
            return v5;
        },
        "b": v20,
        "h": v4,
        "e": a22,
        "c": v4,
        ...v3,
    };
    return o30;
}
f21(v3, v20);
f21(v20, v3);
f21(v4, v5);
("number").concat("T", "number");
