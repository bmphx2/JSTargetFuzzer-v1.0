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
    const o41 = {
        "e": v11,
        set g(a20) {
            let v23 = "UV";
            Object.defineProperty(v11, -4, { configurable: true, enumerable: true, value: this });
            const v26 = -Infinity;
            --v23;
            +-65536;
            -a20;
            Math.sign(v26);
            Math.atan2(-65536, v26);
            Math.log1p("m");
            -65536 << "m";
            a16.d <<= -1073741824;
            super.e = v13;
        },
        valueOf(a35, a36, a37, a38) {
            v11[249] = a38;
            new F7(a17, -9007199254740992, a17);
            try { this.getFloat32(); } catch (e) {}
            return v12;
        },
        [a17]: -4,
    };
    return o41;
}
f14(v13, v12, -1073741824, v13);
const v43 = f14(v13, v12, -1024, v11);
f14(v13, v11, -1073741824, v12);
class C47 {
    constructor(a49, a50) {
        a50 % -9007199254740992;
    }
    get g() {
        function F54(a56, a57, a58, a59) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = this;
            this.d = 268435440;
        }
        new F54(v11, -9007199254740992, -1024, -1024);
        new F54(this, F7, v43, -9007199254740992);
        new F54(v13, -4, 268435440, -4);
        return F54;
    }
}
new C47(-2.633910383015725, -2.2250738585072014e-308);
