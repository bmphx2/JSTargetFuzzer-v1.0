function f0() {
    const o17 = {
        "b": "function",
        ["function"](a5, a6) {
            const o12 = {
                "maxByteLength": 127,
            };
            const v14 = new SharedArrayBuffer(0, o12);
            new Float64Array(v14);
            return 9007199254740992n;
        },
    };
    return o17;
}
f0();
let v19 = f0();
const v20 = f0();
function F21(a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a23;
    this.e = a23;
    this.a = v20;
}
const v24 = new F21(v19);
new F21(v20);
const v26 = new F21(v19);
class C27 {
    static a = v26;
    static c;
    set a(a29) {
        const v30 = v26 / v20;
        try { a29(v24, v20); } catch (e) {}
        a29 = v30;
    }
    static 1073741823;
    m(a33, a34, a35, a36) {
        super.h = a36;
        [v19,,...a34] = a36;
        return this;
    }
}
new C27();
new C27();
new C27();
function f43() {
    const v44 = -Infinity;
    const o52 = {
        "g": 255,
        valueOf(a48) {
            a48.valueOf = a48;
            for (const v49 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v44);
                } catch(e51) {
                }
            }
            return 255;
        },
        [v44]: v44,
        "d": -1033928124,
    };
    return o52;
}
const v53 = f43();
const v54 = f43();
const v55 = f43();
function f59(a60, a61, a62, a63) {
    const o77 = {
        ...v54,
        "g": 4.0,
        set a(a65) {
            a65[a60] = a65;
            try { a65(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o77;
}
const v78 = f59(v55, 1000000000000.0, 1000000000000.0, 1000000.0);
f59(v54, 1000000000000.0, 1000000000000.0, 1000000.0);
const v80 = f59(v53, 4.0, 4.0, 1000000000000.0);
const o84 = {
    __proto__: v78,
    4037: v54,
    "a": v55,
};
const o85 = {
    "h": 1000000.0,
    ...v80,
    "f": f59,
    "c": f59,
    "b": v53,
};
("symbol")["slice"]();
