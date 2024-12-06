class C3 {
    get d() {
        try {
        const t0 = -12;
        t0(-2.220446049250313e-16, 36482, 36482, -4294967297, this);
        } catch (e) {}
        return 36482;
    }
    static set f(a10) {
        a10 *= -1.7976931348623157e+308;
        const v11 = this[0];
        try {
            super.n(v11, a10);
        } catch(e13) {
        }
    }
}
const v14 = new C3();
const v15 = new C3();
let v16 = new C3();
const v17 = [v14,v15];
const v18 = ["object",v17,-2.220446049250313e-16];
const v19 = [v16,-1.7976931348623157e+308,v18,"object"];
function f20(a21, a22, a23) {
    const o42 = {
        "f": a22,
        [a21](a25, a26, a27, a28) {
            v16 -= v14;
            const v32 = super.f;
            function f33(a34, a35, a36, a37) {
                const o38 = {
                    "e": a36,
                    "c": v32,
                    "h": a28,
                    ...v15,
                    __proto__: a35,
                    ...v17,
                };
                return a34;
            }
            f33(v16, v17, v17, a25);
            f33(a23, a22, a26, v15);
            f33(a25, a26, a22, a21);
            return f33;
        },
    };
    return C3;
}
f20(v16, v18, v14);
f20(v14, v18, v16);
let v45 = 0;
while (v45 < 6) {
    [v19,-1.7976931348623157e+308,f20];
    [-1.7976931348623157e+308];
    [v14];
    v45++;
}
f20(v16, v19, v16);
let v53 = -12n;
v53 >>= v53;
new BigUint64Array();
let v56 = -65537n;
try {
    SyntaxError(v56).cause;
    v56 -= v45;
} catch(e60) {
}
function f61() {
    return !arguments;
}
f61(f61);
