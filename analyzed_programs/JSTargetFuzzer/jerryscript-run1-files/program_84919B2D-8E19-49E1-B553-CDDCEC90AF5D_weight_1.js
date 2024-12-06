let v0 = "size";
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
}
const v7 = new F3(v0, v0);
const v8 = new F3(v0, "boolean");
const v9 = new F3(v0, "boolean");
function f10(a11, a12, a13) {
    function f14(a15, a16, a17, a18) {
        return f14;
    }
    async function f19(a20, a21) {
        const v23 = new Proxy();
        return v23;
    }
    const o30 = {
        [a12](a25) {
            this[1] = a25;
            throw this;
        },
        get a() {
            let v27;
            try { v27 = this("function", this, a13); } catch (e) {}
            v0 = v27;
            try {
                super.n();
            } catch(e29) {
            }
            return a13;
        },
        "e": v8,
        __proto__: a11,
        "d": v7,
        ...v9,
        ...a11,
        "b": a12,
        "a": v0,
        "h": v7,
        "c": "boolean",
        "g": f10,
    };
    return o30;
}
f10(v8, v7, "function");
f10(f10(v0, v7, "function"), v7, v0);
function f34() {
    const o53 = {
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
            let [v40,v41] = "-536870912";
            const v42 = [];
            try {
                v42.__proto__ = v42;
            } catch(e43) {
            }
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return v0;
        },
    };
    return o53;
}
const v54 = f34();
const v55 = f34();
const v56 = f34();
class C63 extends f34 {
    constructor(a65, a66, a67, a68) {
        super();
        const o83 = {
            "call": f34,
            "construct": f34,
            "defineProperty": a65,
            set b(a70) {
                for (let i72 = 0;
                    (() => {
                        eval(a70);
                        const o75 = {
                        };
                        return this < 9;
                    })();
                    ) {
                }
            },
            "get": f34,
            "getOwnPropertyDescriptor": f34,
            "has": f34,
            set b(a81) {
                let v82;
                try { v82 = a81(a81, this); } catch (e) {}
                a68 = C63;
                v82.valueOf = a81;
            },
            "isExtensible": f34,
            "set": f34,
            "setPrototypeOf": f34,
        };
        new Proxy(this, o83);
    }
}
const v86 = new C63(-19870386, -341266709, v55, 9007199254740990);
let v87 = new C63(v86, -1957950668, v86, 9007199254740990);
let v88 = new C63(v56, 9007199254740990, v54, -341266709);
if (v55 <= v88) {
    v88 = C63;
} else {
    let {"b":v91,"d":v92,} = C63;
    C63[-4096] += -4096;
}
v87 <<= v86;
class C93 {
}
function f94(a95, a96) {
    return a96;
}
9007199254740990 <= v54 ? 9007199254740990 : v54;
