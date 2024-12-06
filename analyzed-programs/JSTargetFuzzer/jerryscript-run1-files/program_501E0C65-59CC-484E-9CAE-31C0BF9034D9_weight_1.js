function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1073741824;
}
new F0();
new F0();
new F0();
function f9() {
    return 1;
}
new Set();
function f12() {
    const o29 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        get f() {
            this[7] = -24152;
            let v17;
            try { v17 = this.n(this); } catch (e) {}
            let [v18,v19] = v17;
            new Int8Array(3);
            new Int8Array(8);
            new Int16Array(3692, Int8Array, 3692);
            return "-536870912";
        },
    };
    return o29;
}
const v30 = f12();
const v31 = f12();
const v32 = f12();
class C39 extends f12 {
    constructor(a41, a42, a43, a44) {
        super();
        const o45 = {
            "e": f12,
            "construct": f12,
            "defineProperty": f12,
            "get": f12,
            "getOwnPropertyDescriptor": f12,
            "has": f12,
            "isExtensible": f12,
            "set": f12,
            "setPrototypeOf": f12,
        };
        new Proxy(this, o45);
    }
}
const v48 = new C39(-19870386, -341266709, v31, 36071);
let v49 = new C39(v48, -1957950668, v48, 36071, -19870386, -65535, Set);
let v50 = new C39(v32, 36071, v30, -341266709);
if (v31 <= v50) {
    v50 = C39;
} else {
    let {"b":v53,"d":v54,} = C39;
    C39[-4096] += -4096;
}
v49 <<= v48;
36071 <= v30 ? 36071 : v30;
