function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
}
const v7 = new F3("size", "size");
const v8 = new F3("size", "boolean");
const v9 = new F3("size", "boolean");
function f10(a11, a12, a13) {
    const o14 = {
        "e": v8,
        __proto__: a11,
        "d": v7,
        ...v9,
        ...a11,
        "b": a12,
        "a": "size",
        "h": v7,
        "c": "boolean",
        "g": f10,
    };
    return o14;
}
f10(v8, v7, "function");
f10(f10("size", v7, "function"), v7, "size");
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
            try { this.n(this); } catch (e) {}
            let [v24,v25] = "-536870912";
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return "size";
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
            "defineProperty": a47,
            "get": f18,
            "getOwnPropertyDescriptor": f18,
            "has": f18,
            "isExtensible": f18,
            "set": f18,
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
