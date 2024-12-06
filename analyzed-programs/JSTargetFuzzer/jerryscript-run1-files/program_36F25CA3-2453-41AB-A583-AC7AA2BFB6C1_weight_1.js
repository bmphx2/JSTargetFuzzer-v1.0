function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
}
const v7 = new F3("size", "size");
const v8 = new F3("size", "boolean");
const v9 = new F3("size", "boolean");
function f10(a11, a12, a13) {
    function f14(a15, a16, a17, a18) {
        return f14;
    }
    async function f19(a20, a21) {
        const v23 = new Proxy();
        return v23;
    }
    const o24 = {
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
    return o24;
}
f10(v8, v7, "function");
f10(f10("size", v7, "function"), v7, "size");
function f28() {
    const o45 = {
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
            let [v34,v35] = "-536870912";
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return "size";
        },
    };
    return o45;
}
const v46 = f28();
const v47 = f28();
const v48 = f28();
class C55 extends f28 {
    constructor(a57, a58, a59, a60) {
        super();
        const o64 = {
            "call": f28,
            "construct": f28,
            "defineProperty": a57,
            "get": f28,
            "getOwnPropertyDescriptor": f28,
            "has": f28,
            set b(a62) {
                let v63;
                try { v63 = a62(a62, this); } catch (e) {}
                a60 = C55;
                v63.valueOf = a62;
            },
            "isExtensible": f28,
            "set": f28,
            "setPrototypeOf": f28,
        };
        new Proxy(this, o64);
    }
}
const v67 = new C55(-19870386, -341266709, v47, 9007199254740990);
let v68 = new C55(v67, -1957950668, v67, 9007199254740990);
let v69 = new C55(v48, 9007199254740990, v46, -341266709);
if (v47 <= v69) {
    v69 = C55;
} else {
    let {"b":v72,"d":v73,} = C55;
    C55[-4096] += -4096;
}
v68 <<= v67;
class C74 {
}
function f75(a76, a77) {
    return a77;
}
9007199254740990 <= v46 ? 9007199254740990 : v46;
