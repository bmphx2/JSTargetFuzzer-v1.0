function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 30061;
    this.e = 30061;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o11 = {
        __proto__: v3,
        set e(a10) {
            super.c |= v3 >>= a10;
        },
        "e": v4,
        "h": a8,
        "g": v3,
        "b": a8,
        "c": v3,
        268435456: v3,
        [v3]: a8,
        "f": v5,
        ...a8,
    };
    return o11;
}
const v12 = f6(v3, v5);
const v13 = f6(v4, v12);
f6(v12, v12);
const v16 = new WeakSet();
function f17() {
    return f6;
}
const v18 = /zsa|bc/md;
const v19 = /(?: foo )su[\c!]/gi;
/a+?/uygms;
function f21(a22, a23, a24) {
    const o25 = {
        [f17]: v13,
        "c": v13,
        __proto__: a23,
        8: a23,
        1823: v19,
    };
    return o25;
}
const v26 = f21(v18, v12, f21);
f21(v5, v16, v4);
f21(v26, v13, F0);
