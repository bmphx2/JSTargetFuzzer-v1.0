function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
const v6 = new F3("valueOf");
const v7 = new F3("matchAll");
const v8 = new F3("valueOf");
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a11;
    F9.f = a11;
    this.b = "preventExtensions";
}
new F9("valueOf", v7, v8);
const v15 = new F9("preventExtensions", v6, v7);
const v16 = new F9("valueOf", F3, v7);
function f17(a18, a19) {
    const o34 = {
        "d": v7,
        __proto__: v16,
        2681: "valueOf",
        "g": "matchAll",
        [v15](a21, a22, a23, a24) {
            new BigUint64Array(4096);
            new Int32Array(256);
            new Float64Array(127);
            return a19;
        },
    };
    return v16;
}
f17(v8, "preventExtensions");
f17(v8, "valueOf");
f17(v16, "valueOf");
function f38() {
    const v39 = -Infinity;
    const o47 = {
        "g": 255,
        valueOf(a43) {
            a43.valueOf = a43;
            for (const v44 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v39);
                } catch(e46) {
                }
            }
            return 255;
        },
        [v39]: v39,
        "d": -1033928124,
    };
    return o47;
}
const v48 = f38();
const v49 = f38();
const v50 = f38();
function f54(a55, a56, a57, a58) {
    const o72 = {
        ...a57,
        "g": 4.0,
        set a(a60) {
            a60[a55] = a60;
            try { a60(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o72;
}
f54(v50, 1000000000000.0, v16, 1000000.0);
f54(v49, 1000000000000.0, 1000000000000.0, 1000000.0);
const v75 = f54(v48, 4.0, 4.0, 1000000000000.0);
const o79 = {
    __proto__: v50,
    4037: v49,
    "a": v50,
};
const o80 = {
    "h": 1000000.0,
    ...v75,
    "f": f54,
    "c": f54,
    "b": v48,
};
