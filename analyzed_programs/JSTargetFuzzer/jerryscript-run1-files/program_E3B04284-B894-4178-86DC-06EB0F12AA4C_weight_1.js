function f6() {
    return -9007199254740992;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1073741824;
    this.d = -1073741824;
    this.g = a9;
}
const v11 = new F7(8, 8);
const v12 = new F7(-1073741824, -1024);
const v13 = new F7(8, -9007199254740992);
function f14(a15, a16, a17, a18) {
    const o28 = {
        "e": v11,
        set g(a20) {
            a16.d <<= -1073741824;
            super.e = v13;
        },
        valueOf(a22, a23, a24, a25) {
            v11[249] = a25;
            new F7(a17, -9007199254740992, a17);
            try { this.getFloat32(); } catch (e) {}
            return v12;
        },
        [a17]: -4,
    };
    return o28;
}
f14(v13, v12, -1073741824, v13);
f14(v13, v12, -1024, v11);
f14(v13, v11, -1073741824, v12);
class C34 {
    constructor(a36, a37) {
        a37 % -9007199254740992;
    }
}
new C34(-2.633910383015725, -2.2250738585072014e-308);
