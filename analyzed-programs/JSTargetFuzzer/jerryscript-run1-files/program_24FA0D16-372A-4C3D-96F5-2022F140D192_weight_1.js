let v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v0;
    this.e = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6(a7) {
    const o19 = {
        "d": F1,
        [v4]: v0,
        toString(a9, a10, a11, a12) {
            let v14;
            try { v14 = a11["log10"](v0, a12, v0, "log10"); } catch (e) {}
            [v14,v14,,...v0] = a9;
            let {"h":v15,} = v0;
            for (let v16 = 0; v16 < 32; v16++) {
                v15["p" + v16] = v16;
            }
            return v4;
        },
        "h": a7,
    };
    return o19;
}
const v20 = f6(v3);
const v21 = f6(v3);
const v22 = f6(v5);
function f23(a24, a25) {
    const o36 = {
        "e": a24,
        __proto__: a24,
        "a": f6,
        n(a27, a28) {
            const o31 = {
                "maxByteLength": 1000,
            };
            const v33 = new SharedArrayBuffer(1000, o31);
            new Int32Array(v33);
            return v33;
        },
    };
    return o36;
}
f23(v3, v20);
f23(v5, v21);
f23(v4, v22);
[-4096,-1073741824,16];
[-1438626245,1073741824,-21910,-5,-9007199254740991,129];
[-1073741824];
function f55() {
    const o84 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        get f() {
            this[7] = -24152;
            let v60;
            try { v60 = this.n(this); } catch (e) {}
            for (let v61 = 0; v61 < 32; v61++) {
                const t66 = "p";
                t66["p" + v61] = v61;
            }
            let [v64,v65] = v60;
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return 3692;
            +-2;
            for (let [v78,v79] of "resizable") {
            }
            return "-536870912";
        },
        get b() {
            const t80 = "-536870912";
            t80.length *= 1.7976931348623157e+308;
            return -536870912;
        },
    };
    return o84;
}
const v85 = f55();
const v86 = f55();
const v87 = f55();
class C94 extends f55 {
    constructor(a96, a97, a98, a99) {
        super();
        const o102 = {
            "call": f55,
            "construct": f55,
            "defineProperty": f55,
            get b() {
                return this;
            },
            p() {
                this[C94] = this;
                return C94;
            },
            "get": f55,
            "getOwnPropertyDescriptor": f55,
            "has": f55,
            "isExtensible": f55,
            "set": f55,
            "setPrototypeOf": f55,
        };
        new Proxy(this, o102);
    }
}
new Uint8Array(4);
new Int32Array(2592);
new Uint32Array(2592, 2592);
new Uint32Array();
const v114 = new C94(-19870386, -341266709, v86, 9007199254740990);
let v115 = new C94(v114, -1957950668, v114, 9007199254740990);
try {
    function f116() {
    }
    const v120 = [-1000000.0,f116,-807.6596022618603,-1000000.0];
    const v121 = [v120,-1000000.0,0.014069366437978514,v120];
    const v122 = [v121,f116,-807.6596022618603];
    function* f126(a127, a128, a129, a130) {
        try { a129.padStart(a127, "object"); } catch (e) {}
        const o132 = {
            "construct": f116,
            "ownKeys": f116,
            "preventExtensions": f116,
        };
        new Proxy(v122, o132);
        yield* "object";
        return a127;
    }
    f126(-807.6596022618603, "U7O", "U7O", v121);
} finally {
}
const v138 = new Uint32Array([6,17590]);
new Proxy(v138, v114);
let v141 = new C94(v87, 9007199254740990, v85, -341266709);
if (v86 <= v141) {
    v141 = C94;
} else {
    let {"b":v144,"d":v145,} = C94;
    C94[-4096] += -4096;
}
v115 <<= v114;
9007199254740990 <= v85 ? 9007199254740990 : v85;
