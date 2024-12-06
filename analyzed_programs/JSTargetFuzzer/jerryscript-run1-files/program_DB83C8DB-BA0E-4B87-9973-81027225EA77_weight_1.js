const v1 = new WeakSet();
function f2() {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = a5;
        this.h = a5;
        this.d = f2;
    }
    new F3(F3);
    new F3(v1);
    new F3(f2);
    return WeakSet;
}
const v9 = [-1000000.0,3.4025101328261584,-1000.0,3.760813936338621e+307,127333.57644680468,2.2250738585072014e-308,-3.0,-3.329922362404538];
[2.220446049250313e-16,2.220446049250313e-16,-4.0,-1.6898787662048477e+307,-1.7976931348623157e+308,0.14373940709906574];
const v11 = [-4.0,1000000000000.0];
function f15(a16, a17) {
    function f18(a19) {
        return a19;
    }
    class C20 extends f18 {
        h;
    }
    const o27 = {
        9: v9,
        [WeakSet]: 6,
        "c": a16,
        "f": v1,
        o(a22, a23, a24, a25) {
            let v26;
            try { v26 = a23(a24); } catch (e) {}
            v26 = a23;
            v11[1061216611] = a25;
            return a17;
        },
        ...v1,
        ...v11,
    };
    return o27;
}
f15(16, 6);
f15(16, 16);
f15(39302, 16);
Object.defineProperty([-9007199254740990,-40618,-8,536870887,11874,-21128,-3,11982,28509], "e", { writable: true, configurable: true, value: [-57482,903022278,536870912] << [14,-37843,8,9007199254740990] });
