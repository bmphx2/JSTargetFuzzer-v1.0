const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v7 = [v5,v0,v4];
[v7];
const v9 = [v0];
function f10(a11, a12) {
    const o19 = {
        __proto__: a12,
        [v3](a14, a15, a16, a17) {
            a14 | v9;
            return a15;
        },
        "h": v7,
        "matchAll": v0,
        "d": a11,
        955: v9,
        8: v5,
        ...a11,
    };
    return o19;
}
const v20 = f10(v4, v5);
f10(v4, v4);
const v22 = f10(v20, v5);
function f23() {
    const o40 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        get f() {
            this[7] = -24152;
            let v28;
            try { v28 = this.n(this); } catch (e) {}
            let [v29,v30] = v28;
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(-9223372036854775807);
            return "-536870912";
        },
    };
    return o40;
}
const v41 = f23(v22, f10, v7);
const v42 = f23(v41, v0);
const v43 = f23();
class C50 extends f23 {
    constructor(a52, a53, a54, a55) {
        super();
        const o56 = {
            "call": f23,
            "construct": f23,
            "defineProperty": f23,
            "get": f23,
            "getOwnPropertyDescriptor": f23,
            "has": f23,
            "isExtensible": f23,
            "set": f23,
            "b": f23,
        };
        const v60 = new Uint8Array(1311);
        v60.sort();
        new Proxy(this, o56);
    }
}
const v63 = new C50(-19870386, 5, v42, 9007199254740990);
let v64 = new C50(v63, -1957950668, v63, 9007199254740990);
let v65 = new C50(v43, 9007199254740990, v41, 5);
if (v42 <= v65) {
    v65 = C50;
} else {
    let {"b":v68,"d":v69,} = C50;
    C50[-4096] += -4096;
}
v64 <<= v63;
9007199254740990 <= v41 ? 9007199254740990 : v41;
