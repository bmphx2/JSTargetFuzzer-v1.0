let v1 = -16;
const v3 = [v1];
const v4 = [v1,3,v1];
const v5 = [3];
function f12() {
    return 54531;
}
function f13(a14, a15) {
    const o19 = {
        "h": 0,
        get a() {
            Object.defineProperty(this, 1, { get: f12, set: f12 });
            let v17 = a15.h;
            v17.valueOf = f12;
            [,a14,v17,v1] = v3;
            try { new v1(3, v17, this, this); } catch (e) {}
            return v1;
        },
        "g": v5,
        ...v5,
        2830: a14,
        64: -2,
        "c": -3,
        "b": f12,
    };
    return o19;
}
f13(-268435456, -268435456);
f13(f13, 44421);
f13(44421, -2);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
    this.f = -4294967296;
}
const v38 = new F32(-4294967296, 5n, "global", "-16");
const v39 = new F32(-4294967296, -7n, "-16", "global");
const v40 = new F32(-4294967296, 5n, "global", "global");
if (v40 == v40) {
    const v42 = -1106639255 == v1;
    if (v42) {
        const t41 = "function";
        t41.b = v42;
    } else {
        function F43(a45, a46, a47, a48) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = v38;
        }
        const v49 = new F43(v39, F43, v39, v40);
        new F43(v38, F43, v38, f12);
        new F43(v38, v49, v40, v39);
    }
} else {
    function F55(a57, a58, a59) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a59;
    }
    const v60 = new F55(F55, "global", "function");
    new F55(v60, "global", "function");
    new F55(v60, "global", "function");
}
