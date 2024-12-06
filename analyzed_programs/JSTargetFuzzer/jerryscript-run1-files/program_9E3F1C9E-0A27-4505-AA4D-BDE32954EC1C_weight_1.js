function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = "preventExtensions";
}
const v6 = new F3("preventExtensions");
const v7 = new F3("matchAll");
const v8 = new F3("valueOf");
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a11;
    F3.f = a11;
    this.b = "preventExtensions";
}
const v14 = new F9("valueOf", v7, v8);
new F9("preventExtensions", v6, v7);
const v16 = new F9("valueOf", F3, v7);
function f17(a18, a19) {
    const o34 = {
        "d": v7,
        __proto__: v16,
        2681: "valueOf",
        "g": "matchAll",
        [v16](a21, a22, a23, a24) {
            new EvalError(a21);
            new Int32Array(256);
            new Float64Array(127);
            return a19;
        },
    };
    return v14;
}
f17(v8, "preventExtensions");
f17(v8, "valueOf");
f17(v14, "valueOf");
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
new Int8Array();
try {
} catch(e55) {
    for (let v56 = 0; v56 < 5; v56++) {
    }
    function f57() {
        return f57;
    }
}
function f59(a60, a61, a62, a63) {
    const o77 = {
        ...a62,
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
f59(v50, 1000000000000.0, v16, 1000000.0);
f59(v49, 1000000000000.0, 1000000000000.0, 1000000.0);
const v80 = f59(v48, 4.0, 4.0, 1000000000000.0);
const o84 = {
    __proto__: v50,
    3275478698: v49,
    "a": v50,
};
const o85 = {
    "h": 1000000.0,
    ...v80,
    "f": f59,
    "c": f59,
    "b": v48,
};
