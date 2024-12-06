let v2 = 65535;
const v3 = [v2];
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
    this.h = a6;
}
new F4(-1);
new F4(1);
new F4(v2);
const v10 = [v2,-1];
[v2,v10,v10,v10,v10];
class C12 {
    [v3];
    m(a14, a15, a16) {
        let v13 = this;
        -1 + v10;
        const v18 = v13 == v2;
        super.a = a15;
        ({"b":v2,"e":v13,...v13} = v13);
        return v18;
    }
    [v2];
    [-1] = v3;
}
new C12();
new C12();
new C12();
const v24 = new Int8Array(2);
const v27 = new BigUint64Array(300);
const o28 = {
    ...v27,
    [v24]: 2,
};
try { v24.getFloat32(); } catch (e) {}
