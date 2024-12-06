function f0() {
    const o8 = {
        get g() {
            function f5(a6) {
                return a6;
            }
            class C7 extends f5 {
                static h;
            }
            return this;
        },
        257: 5.0,
        __proto__: "function",
    };
    return o8;
}
f0();
const v10 = f0();
f0();
new Uint16Array(2577);
const v17 = new Uint32Array(145);
new BigInt64Array(7);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a35;
    this.f = -4294967296;
}
new F30(-4294967296, 5n, "global", "-16");
new F30(-4294967296, -7n, "-16", "global");
const v38 = new F30(-4294967296, 5n, "global", "global");
if ("function" == v38) {
} else {
    function F43(a45, a46, a47) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a47;
        const v48 = [];
        try { new a47(v17, a45, v48, "-16", v38); } catch (e) {}
        let v51;
        try { v51 = ("function")["trimEnd"](...a47, ...v17, Uint32Array, v10, ...F43, F43); } catch (e) {}
        a45 = v51;
    }
    const v52 = new F43(F43, "global", "function");
    new F43(v52, "global", "function");
    new F43(v52, "global", "function");
}
