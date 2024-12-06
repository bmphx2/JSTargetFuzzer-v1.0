class C3 {
    get c() {
        if (this) {
            try {
            const t0 = "g";
            t0("g", "g", 2.0, 2.0);
            } catch (e) {}
            ("g").length;
        } else {
            this.__proto__ = this;
        }
        return this;
    }
    [2.0] = "s7e";
}
const v7 = new C3();
new C3();
const v9 = new C3();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
    this.e = a13;
    this.f = 2.0;
}
new F10(v7, F10, v7);
new F10(v7, C3, v7);
const v17 = new F10(v7, F10, v9);
const v22 = Float64Array == 114668275;
if (v22) {
    v17[536870912] &= 2.0;
} else {
    C3.e = v22;
    [9007199254740991,-1682136394];
    [48165,4,-9007199254740992,27213,-1599907765,2147483649,12,29399,10,11];
    [-16,-4,16058,-63800,-256,536870889];
}
