function f5() {
    return f5;
}
const v6 = [f5,f5,f5];
const v8 = [v6,[v6,v6,v6]];
v8.valueOf = f5;
v8.fill();
new BigInt64Array(3414);
class C11 {
    constructor(a13) {
        return arguments;
    }
}
const v15 = new C11(C11);
const v16 = new C11(C11);
v16.d = v15;
new Float32Array(3);
new Float32Array(2573);
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
            new Int8Array(3692);
            return "-536870912";
        },
    };
    return o40;
}
const v41 = f23();
const v42 = f23();
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
            "setPrototypeOf": f23,
        };
        new Proxy(this, o56);
    }
}
const v59 = new C50(-19870386, -341266709, v42, 9007199254740990);
let v60 = new C50(v59, -1957950668, v59, 9007199254740990);
let v61 = new C50(v43, 9007199254740990, v41, -341266709);
if (v42 <= v61) {
    v61 = C50;
} else {
    let {"b":v64,"d":v65,} = C50;
    C50[-4096] += -4096;
}
v60 <<= v59;
9007199254740990 <= v41 ? 9007199254740990 : v41;
