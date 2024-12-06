const v1 = new Date();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.g = a8;
}
const v9 = new F5(512, 9007199254740992);
new F5(9007199254740992, 512);
const v11 = new F5(257, 512);
function f12(a13, a14) {
    const o22 = {
        "a": 512,
        ...a14,
        p(a16, a17) {
            let v18;
            try { v18 = new a17(v9, a14, a17); } catch (e) {}
            try { v18(Date, 512, v18); } catch (e) {}
            v1.f;
            v1[a14];
            return a13;
        },
        "h": a13,
        "d": a13,
    };
    return o22;
}
f12(512, v11);
f12(257, v9);
f12(9007199254740992, v9);
const o33 = {
    n(a28, a29, a30, a31) {
        /(a)\1D(?:ab)?/gu;
        return a30;
    },
};
function f36() {
    return 10000;
}
const v43 = -5534n >= -5534n;
const t38 = 10000;
t38[16] = 10000;
const v44 = 12n && v43;
try { v44.n(); } catch (e) {}
const v49 = -4294967295;
f36();
1 == 1 ? 1 : 1;
