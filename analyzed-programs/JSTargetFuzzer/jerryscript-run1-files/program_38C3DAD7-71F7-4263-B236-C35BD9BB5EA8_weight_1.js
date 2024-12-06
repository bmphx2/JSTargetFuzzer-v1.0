const v2 = new WeakMap();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v2;
    this.f = a13;
}
new F9(268435456, 864696721, 1073741823);
new F9(268435456, 2147483648, 864696721);
new F9(1073741823, 1073741824, 864696721);
function f20() {
    const o37 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "message": -24152,
        get f() {
            this[7] = -24152;
            let v25;
            try { v25 = this.n(this); } catch (e) {}
            let [v26,v27] = v25;
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return "-536870912";
        },
    };
    return 1073741824;
}
const v38 = f20();
const v39 = f20();
const v40 = f20();
class C47 extends f20 {
    constructor(a49, a50, a51, a52) {
        super();
        const o53 = {
            "call": f20,
            "construct": f20,
            "defineProperty": f20,
            "get": a52,
            "getOwnPropertyDescriptor": f20,
            "has": f20,
            "isExtensible": f20,
            "set": f20,
            "setPrototypeOf": f20,
        };
        new Proxy(this, o53);
    }
}
const v56 = new C47(-19870386, -341266709, v39, 9007199254740990);
let v57 = new C47(v56, -1957950668, v56, 9007199254740990);
let v58 = new C47(v40, 9007199254740990, v38, -341266709, -9007199254740992n);
if (v39 <= v58) {
    v58 = C47;
} else {
    let {"b":v61,"d":v62,} = C47;
    C47[-4096] += -4096;
}
v57 <<= v56;
9007199254740990 <= v38 ? 9007199254740990 : v38;
