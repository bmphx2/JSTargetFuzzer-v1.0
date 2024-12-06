class C3 {
    static get d() {
        let v5;
        try {
        const t0 = 2.2250738585072014e-308;
        v5 = t0(this, this, "-256", 2.2250738585072014e-308, "callee");
        } catch (e) {}
        let v6;
        try { v6 = v5(2.2250738585072014e-308, "callee", "-256", 2.2250738585072014e-308); } catch (e) {}
        return v6;
    }
    #a;
    n(a8) {
        const t13 = "-256";
        t13[2.2250738585072014e-308] = this;
        const o9 = {
        };
        const v11 = new Proxy("-256", o9);
        return v11;
    }
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function f15() {
    return C3;
}
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v14;
}
let v21 = new F16(v14, v13, "callee");
new F16(v14, C3, 2.2250738585072014e-308);
const v23 = new F16(v13, v14, v21);
const v24 = [v23,v12,2.2250738585072014e-308,v21,C3];
[f15,v23,v13];
const v26 = [v23,v21,v24];
v21 = v12;
delete v26[256];
new Int32Array(8);
new Int32Array(16);
new Uint8ClampedArray(7);
