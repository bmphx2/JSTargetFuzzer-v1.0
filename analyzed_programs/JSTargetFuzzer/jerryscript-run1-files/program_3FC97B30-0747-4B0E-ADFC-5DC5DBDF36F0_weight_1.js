function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = F0;
    this.f = v3;
}
const v9 = new F6(v4);
new F6(v5);
const v11 = new F6(v4);
[-0.0,795.5870397167396,9.192215314100696e+307,-698.4364953295524,-1000000000.0,-4.0,-1.1475675568193981e+308];
[-0.0,-1e-15];
const v14 = [0.5318762648450792,-2.0,-35378.22726871201,-0.0,-3.4917757871582804,3.0,-792187.8893127412];
function f15() {
    return f15;
}
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
}
const v19 = new F16();
([F16]).reduce(f15, v19);
function f22(a23, a24) {
    const o31 = {
        "b": F6,
        "h": v14,
        [v9](a26, a27) {
            a24.toString = a23;
            const o28 = {
            };
            new Proxy(v11, o28);
            return v11;
        },
        ...v4,
        "g": v9,
    };
    return o31;
}
const v32 = f22(F6, v3);
f22(v5, v4);
f22(v32, v32);
let v35 = undefined;
class C36 {
    constructor(a38) {
        v35 >>= this;
    }
}
new C36(v35);
