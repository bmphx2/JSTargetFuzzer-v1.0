const v0 = [-2.220446049250313e-16,1e-15,263.2267404897366,5.0];
const v1 = [-197.78023937768353,-8.308816177560963];
const v2 = [0.5526843855350995,1.7976931348623157e+308,0.7882474240038512,1.7976931348623157e+308,-389.14177688066775,1e-15,175.28440994721404];
function f3(a4, a5) {
    const o15 = {
        set h(a7) {
            let v6 = this;
            v1 !== v6;
            const v9 = super.b;
            v6 -= v6;
            try { v9(v1, a5, a5); } catch (e) {}
        },
        [a5](a12) {
            const v13 = a12[4];
            const t14 = delete a5[v13];
            t14[7] = v13;
            return v2;
        },
    };
    return o15;
}
f3(v1, v1);
const v17 = f3(v0, v0);
const v18 = f3(v2, v1);
class C19 extends f3 {
    [f3];
    #g = v18;
    #a;
    static g;
    static #n(a21, a22, a23) {
        const t30 = f3(a23, a23);
        t30.__proto__ = v17;
        const v25 = [v1,this,v0,v18];
        const v26 = [v25,v17,a21];
        [v26,a23,v0,v26,a22];
        return v25;
    }
}
new C19();
new C19();
const v30 = new C19();
const o31 = {
    __proto__: v1,
    "f": v2,
    10: v30,
    2147483648: v17,
};
for (let v32 = 0; v32 < 32; v32++) {
    v0["p" + v32] = v32;
}
