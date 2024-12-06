const v3 = /[^C]/uygms;
const v4 = /a(?=b)/u;
const v5 = /(a[bc]d)/us;
const v6 = [512,-58588097,-9223372036854775808,1073741825,-65537,536870912,4];
const v7 = [0,4294967297,6,445496119,-4096,9223372036854775807,11];
const v8 = [536870912,5,10000,7836,15625,512,2297,2147483648];
class C9 {
    static #b = v3;
    static #g;
    static {
        this[-1] = v8 && -411545081;
    }
    constructor(a13, a14, a15) {
        v7[64] = this;
        v5.dotAll = v5;
        super.d = v7;
        function f16() {
            return v8;
        }
    }
}
const v17 = new C9(v3, v3, v7);
const v18 = new C9(v17, v17, v17);
new C9(v4, v4, v7);
v6[4294967296];
throw v3;
function f21(a22, a23, a24, a25) {
    const o33 = {
        valueOf(a27, a28, a29) {
            [v8,a23,[[a29,v18],a23]];
            return a27;
        },
    };
    return o33;
}
const v34 = f21(v5, v3, v18, v6);
const v35 = f21(v34, f21, v34, v3);
f21(-411545081, v35, v7, v35);
