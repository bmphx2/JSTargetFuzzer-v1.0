class C3 {
    constructor(a5, a6) {
        const v7 = this[6];
        let v8;
        try { v8 = new v7(); } catch (e) {}
        v8 === this;
    }
    static g = 536870912;
    [536870912] = 536870912;
    ["bigint"] = "bigint";
}
const v13 = new C3(536870912, C3);
new C3(536870912, 536870912);
const v15 = new C3(v13, 536870912);
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a23;
    this.c = v15;
    this.h = a22;
}
new F19(433624647, "bigint", C3, 10000);
const v26 = new F19(10000, "-1978551487", 536870912, v15);
new F19(433624647, "bigint", 10000, v26);
const v28 = [-1.4322344581691674e+308];
const v29 = [0.9824621037580522,2.2889030652093406e+307,1.7976931348623157e+308,2.220446049250313e-16,4.0,-5.0];
function f30() {
    return v29;
}
v28.filter(f30);
