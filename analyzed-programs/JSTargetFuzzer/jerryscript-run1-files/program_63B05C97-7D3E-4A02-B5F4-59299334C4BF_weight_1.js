function f0() {
}
class C1 {
    static get a() {
        let v2 = this;
        ({"f":v2,...f0} = v2);
        const v3 = f0 % v2;
        try { new v2(v3); } catch (e) {}
        new Set();
        f0.valueOf = v2;
        return typeof f0 === "number";
    }
    128;
    b;
}
new C1();
new C1();
new C1();
[699698.0522656543,0.4043636763000341,-3.711833000145619,-3.0,1e-15];
[-897.3661771420152,-3.2685501770364915,695736.2803455759,-4.0,-92038.74028569902,-1000.0,-255.08990821180942,-1e-15,NaN];
[-1000.0,-2.220446049250313e-16,1e-15];
async function f22(a23, a24) {
    function F25(a27, a28, a29) {
        if (!new.target) { throw 'must be called with new'; }
        C1();
    }
    class C31 extends a23 {
        constructor(a33, a34, a35) {
            super();
        }
    }
    new C31(C31, F25, a24);
    return C31;
}
f22();
