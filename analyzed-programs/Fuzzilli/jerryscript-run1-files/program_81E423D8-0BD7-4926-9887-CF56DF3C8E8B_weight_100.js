const v0 = [-5.0,6.234749590437785e+307,-1000.0,2.220446049250313e-16,2.0,0.8541806726800084];
const v1 = [-2.0,-2.2250738585072014e-308,637871.4355654812,1.7976931348623157e+308,1000.0,-1000000000.0,-1.7976931348623157e+308,-1e-15];
const v2 = [0.9891987566973957];
class C3 {
    set h(a5) {
        for (let v6 = 0; v6 < 32; v6++) {
            this["p" + v6] = v6;
        }
    }
    [v2] = v2;
    f = v0;
    #g = v2;
    e = v0;
    static #b;
    1385069931;
}
const v9 = new C3();
const v10 = new C3();
const v11 = new C3();
const v12 = [-2.2250738585072014e-308];
const v13 = [0.3574043549001543];
const v14 = [0.4572595045657616];
function f15() {
    return v12;
}
function f16(a17, a18, a19) {
    const o28 = {
        valueOf(a21, a22, a23) {
            const v24 = a22[v1];
            new C3();
            v24[5] = a17;
            try {
                super.defineProperties();
            } catch(e27) {
            }
            return v14;
        },
        "g": a19,
        "d": a18,
        __proto__: v1,
    };
    return o28;
}
f16(v2, v10, v13);
f16(v0, v11, v12);
f16(v1, v10, v13);
v9 instanceof C3;
class C36 extends f15 {
    static c;
    static #b = v0;
}
new C36();
new C36();
new C36();
