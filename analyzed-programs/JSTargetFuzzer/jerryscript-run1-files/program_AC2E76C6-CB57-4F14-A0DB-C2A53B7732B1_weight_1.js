class C6 {
    static set b(a8) {
        try { new a8(1, this); } catch (e) {}
        1 ^ -4096;
    }
    constructor(a13, a14, a15, a16) {
        let v12 = this;
        function F17(a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a20;
        }
        new F17(a13, a15, -4096);
        new F17(a15, a13, a14);
        super.b;
        57470 / a13;
        v12.valueOf = a16;
        v12 = a14;
        new WeakMap();
        new F17(a13, a13, 128);
    }
}
const v29 = new C6(1, 1073741824, 128, 1073741824);
const v30 = new C6(-4096, 57470, -38674, 1073741824);
const v31 = new C6(-38674, -4096, 57470, 57470);
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a34;
    this.c = C6;
    this.f = v31;
}
const v37 = new F32(v31, 128, v31);
const v38 = new F32(v29, 1073741824, v37);
new F32(v30, 1, v38);
const v42 = new BigUint64Array(3);
v42.sort();
