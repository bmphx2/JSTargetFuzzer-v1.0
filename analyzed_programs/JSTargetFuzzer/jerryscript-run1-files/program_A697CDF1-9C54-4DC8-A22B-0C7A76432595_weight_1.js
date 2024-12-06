new Uint8ClampedArray(8);
new Float32Array(1526);
new Int32Array(128);
function f15() {
    const o32 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        get f() {
            this[7] = -24152;
            let v20;
            try { v20 = this.n(this); } catch (e) {}
            let [v21,v22] = v20;
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return "-536870912";
        },
    };
    return o32;
}
const v33 = f15();
const v34 = f15();
const v35 = f15();
class C42 extends f15 {
    constructor(a44, a45, a46, a47) {
        super();
        const o48 = {
            "call": f15,
            "construct": f15,
            "f": this,
            "a": a44,
            659: 65537,
            __proto__: v34,
            "g": v35,
            "defineProperty": f15,
            "get": f15,
            "getOwnPropertyDescriptor": f15,
            "has": f15,
            "isExtensible": f15,
            "set": f15,
            "setPrototypeOf": f15,
        };
        new Proxy(this, o48);
    }
}
const v51 = new C42(-19870386, -341266709, v34, 9007199254740990);
let v52 = new C42(v34, -1957950668, v51, 9007199254740990);
let v53 = new C42(v35, 9007199254740990, v33, -341266709);
if (v34 <= v53) {
    v53 = C42;
} else {
    let {"b":v56,"d":v57,} = C42;
    C42[-4096] += -4096;
}
v52 <<= v51;
9007199254740990 <= v33 ? 9007199254740990 : v33;
