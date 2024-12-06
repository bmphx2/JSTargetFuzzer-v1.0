const v0 = [];
function f1() {
    const o4 = {
        ...v0,
        __proto__: v0,
        "h": v0,
        o() {
            return v0[v0];
        },
        "a": v0,
        "c": v0,
        "d": v0,
        "b": v0,
    };
    return o4;
}
const v5 = f1();
const v6 = f1();
const v7 = f1();
const v8 = [-86982.57686277141,3.2503328643472287,3.0,0.03395319864463664,3.9537949732517426,-Infinity,2.220446049250313e-16,0.8249513012613053];
const v9 = [1.2447773258785017e+307,3.0,0.6244273626344858,249641.0261318267,4.0,-5.0,-6.132931676289582];
const v10 = [1.556012742492701,-4.0,-2.220446049250313e-16,623.5507126276855];
class C11 {
    static [v10] = v8;
    c = v6;
    #m(a13, a14) {
        v8[12] = this;
        a14[f1] = a13;
        return f1;
    }
    #h;
    [f1];
    [v6];
    [v10];
}
new C11();
const v16 = new C11();
const v17 = new C11();
Object.defineProperty(v5, f1, { writable: true, configurable: true, get: f1 });
v17 != v6;
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a22;
    this.f = v9;
    this.a = v17;
}
new F19(v16, v5);
new F19(v6, v7);
new F19(v17, v5);
