function f0() {
    const o4 = {
        "g": "POSITIVE_INFINITY",
        "a": "undefined",
        ["undefined"]: "POSITIVE_INFINITY",
        __proto__: "fromEntries",
        ..."POSITIVE_INFINITY",
        "b": "fromEntries",
        "e": "undefined",
        ["POSITIVE_INFINITY"]: "POSITIVE_INFINITY",
        "d": "POSITIVE_INFINITY",
        7: "undefined",
    };
    return o4;
}
f0();
const v6 = f0();
const v7 = f0();
class C18 {
    set e(a20) {
        const o21 = {
            "d": "c",
            "a": "h",
            "c": this,
            ..."c",
            "g": 512,
            "e": a20,
            "f": v7,
            "h": -4294967296,
            "b": v6,
        };
        try { a20.getDate(this, "h", "c", o21); } catch (e) {}
    }
    get f() {
        const o28 = {
            valueOf() {
                return "h";
            },
        };
        return this;
    }
}
new C18();
new C18();
new C18();
new Float32Array(1);
new Int32Array(3296);
const v43 = new Float32Array(10);
function f44() {
    return v43;
}
let v45 = 10;
for (; v45--;) {
    const v47 = 1073741824n instanceof Float32Array;
    v43.f = v47;
    const v49 = Symbol.toPrimitive;
    const o60 = {
        [v49]() {
            new Uint8Array(9);
            new Int32Array(3251);
            new Int16Array(8);
            return v47;
        },
    };
}
