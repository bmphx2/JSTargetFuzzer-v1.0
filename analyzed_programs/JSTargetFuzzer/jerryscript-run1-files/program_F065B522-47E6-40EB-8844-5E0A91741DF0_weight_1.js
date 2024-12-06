function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2147483647;
    function f3(a4, a5, a6) {
        const o7 = {
            ...a4,
        };
        return a5;
    }
    this.a = -2147483647;
    this.b = -2147483647;
}
const v8 = new F0();
new F0();
const v10 = new F0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a15;
}
new F12();
function f17(a18, a19, a20) {
    return f17;
}
const v23 = [1.0587316854694702e+307,359.9914495368621,-104.1320039136657,1000000000000.0,352991.45214473526,1000000000000.0];
[NaN,0.14886444956875355,-1000000000000.0,1.7072128672148204e+308,-1.7976931348623157e+308,2.220446049250313e-16];
const v25 = [-2.220446049250313e-16,-1.7976931348623157e+308,7.0575508220578556,-2.220446049250313e-16,-0.3291365449348298];
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v31 in "delete") {
    }
}
function f32(a33, a34) {
    const o45 = {
        ["number"](a36, a37, a38, a39) {
            for (const v40 in v8) {
                super.g = v40;
                try { a37(a36, a33, v10); } catch (e) {}
            }
            this[1000];
            return v8;
        },
        "h": v23,
        ...a33,
        [v8]: "number",
        "a": v25,
        __proto__: v8,
        ...F12,
        set a(a44) {
        },
        "deleteProperty": f32,
    };
    return o45;
}
const v46 = f32("p", "POSITIVE_INFINITY");
f32("POSITIVE_INFINITY", v46);
f32("p", v46);
const v51 = new Uint32Array(String, String, Uint32Array);
new String(v51);
