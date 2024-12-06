const v0 = [0.46373149035060623,3.0];
const v1 = [723026.6572293607,-1.5904889943495755e+308,-1000.0,1.3594533267353213e+308,0.016517575062313883];
const v2 = [1.7976931348623157e+308,0.9048127342523533,0.7909193708622034,-4.823129757307361];
class C3 {
    [v2];
    static #toString(a5) {
        const v8 = typeof v1 === "undefined";
        const v9 = v1[v8];
        try {
            super.fromEntries(v8, v0, v9);
        } catch(e11) {
        }
        return a5;
    }
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a20;
    this.e = v2;
}
const v24 = new F18(v14, v0, v0, v0);
const v25 = new F18(v13, v24, v2, v12);
const v26 = new F18(v24, v25, v25, v0);
function f27(a28, a29, a30) {
    const o31 = {
        __proto__: v13,
        "d": "bigint",
        ...v26,
    };
    return o31;
}
f27(v25, v26, "bigint");
f27(C3, v26, "a");
f27(v24, v12, v12);
