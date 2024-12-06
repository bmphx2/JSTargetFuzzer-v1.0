function f0() {
    const o9 = {
        "a": "p",
        "g": "WFl",
        valueOf(a5) {
            this[2] = "WFl";
            const v6 = this.g;
            let v7;
            try { v7 = a5(a5, "p", "p", "p"); } catch (e) {}
            let v8;
            try { v8 = new v6(...v7, v7, 2.588168714278769, this); } catch (e) {}
            super.c = v8;
            return "WFl";
        },
        "c": "WFl",
        __proto__: "WFl",
        128: 2.588168714278769,
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
const v12 = f0();
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a15;
    this.a = a15;
    this.c = v11;
}
new F13(F13);
new F13(v10);
const v18 = new F13(v11);
class C19 {
    static {
        function f21(a22) {
            return F13;
        }
        class C23 extends f21 {
            static 4;
            #f = v11;
            a;
        }
    }
    [v18] = v12;
    static 536870912;
    #b;
}
const v24 = new C19();
new C19();
const v26 = new C19();
const v28 = new WeakMap();
function f29(a30, a31, a32, a33) {
    const o34 = {
        "b": a33,
        ...a31,
        "e": v26,
        ...C19,
    };
    return o34;
}
f29(C19, v24, C19, v26);
f29(v28, v28, f29(v18, v10, v11, v11), v12);
