const v1 = new Set();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v1;
    this.e = a4;
    this.g = a4;
}
const v5 = new F2(v1);
const v6 = new F2(F2);
const v7 = new F2(v6);
const v8 = [v7,v1];
[v5,v1,v7,v7];
[v6,v5,v5,v7];
[[v8]];
[128];
function f18() {
    const o35 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        get f() {
            this[7] = -24152;
            let v23;
            try { v23 = this.n(this); } catch (e) {}
            let [v24,v25] = v23;
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return "-536870912";
        },
    };
    return o35;
}
const v36 = f18();
const v37 = f18();
const v38 = f18();
class C45 extends f18 {
    constructor(a47, a48, a49, a50) {
        super();
        const o51 = {
            "call": f18,
            "construct": f18,
            "defineProperty": f18,
            "get": f18,
            "getOwnPropertyDescriptor": f18,
            "has": f18,
            "isExtensible": f18,
            "b": f18,
            "setPrototypeOf": f18,
        };
        new Proxy(this, o51);
    }
}
const v54 = new C45(-19870386, -341266709, v37, 9007199254740990);
let v55 = new C45(v54, -1957950668, v54, 9007199254740990);
let v56 = new C45(v38, 9007199254740990, v36, -341266709);
if (v37 <= v56) {
    v56 = C45;
} else {
    let {"b":v59,"d":v60,} = C45;
    C45[-4096] += -4096;
}
v55 <<= v54;
9007199254740990 <= v36 ? 9007199254740990 : v36;
