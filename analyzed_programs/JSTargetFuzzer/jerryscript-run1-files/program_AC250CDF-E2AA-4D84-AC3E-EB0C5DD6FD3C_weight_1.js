const v0 = [1000000000.0,0.2659225515443583,-727.2854733916878];
const v1 = [0.0,NaN,-1000000000000.0,1.7976931348623157e+308,-966803.8067947305,-9.700150461148503,1000000000.0,-2.2250738585072014e-308];
const v2 = [5.605016697480318,1.7976931348623157e+308,-2.220446049250313e-16];
class C3 {
    constructor(a5) {
        try { new v1(a5, this, v0, v1, this, v2, this); } catch (e) {}
    }
    set c(a8) {
        super.buffer = this;
        const v9 = this[this];
        v9.h;
        try { a8(4096); } catch (e) {}
        let v15;
        try { v15 = v2.indexOf(a8, v9); } catch (e) {}
        let v16;
        try { v16 = a8(v15); } catch (e) {}
        v16 ** v16;
        this[0];
    }
    8 = v0;
    static [v2] = v1;
    static 10;
    static h = v2;
}
const v19 = new C3(v2);
const v20 = new C3(v0);
const v21 = new C3(v2);
function f22(a23, a24, a25) {
    const o39 = {
        "d": a25,
        "h": v1,
        [a23]: a23,
        set c(a27) {
            const v34 = ~-7.231146663711565;
            const v35 = v34 | v34;
            Math.tan(v35);
            v35 << -16;
            (-16) ** v34;
        },
    };
    return o39;
}
const v40 = f22(v2, v21, v21);
const v41 = f22(v0, v20, v40, v2);
const v42 = f22(v0, v20, v41);
function f43(a44, a45, a46) {
    const o58 = {
        [v0]: v41,
        "a": v2,
        "h": f22,
        "e": v41,
        get b() {
            this[4096] <<= a45;
            v2.g = v42;
            C3.g = v2;
            C3[1332143270] -= v0 + a46;
            function F49(a51, a52, a53, a54) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a51;
                this.g = a53;
                this.a = a52;
            }
            new F49(v42, a44, v42, a44);
            new a45(v40, v41, v42, v19, a46);
            new F49(a44, a45, v42, v42);
            return a46;
        },
    };
    return o58;
}
f43(v19, f43, v42);
const v60 = f43(v20, f43, f43, v19, f22);
f43(v42, v20, v2);
const v63 = [-16,4];
const v64 = v63.slice(45103, v63, v60, v19);
const v67 = new ArrayBuffer(2863);
v67[9] = v64;
