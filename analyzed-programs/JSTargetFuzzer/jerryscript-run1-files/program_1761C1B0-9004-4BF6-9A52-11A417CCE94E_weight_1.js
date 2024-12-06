function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -14;
    this.b = -14;
    this.f = -14;
}
const v3 = new F0();
const v4 = new F0();
new F0(v4, v4);
const v9 = [v3,v3,v4];
["apply",v4,v9,v9];
[F0,v4,F0,v4];
class C12 {
    constructor(a14, a15, a16, a17) {
    }
}
resourceName(C12, "5D", resourceName, F0);
