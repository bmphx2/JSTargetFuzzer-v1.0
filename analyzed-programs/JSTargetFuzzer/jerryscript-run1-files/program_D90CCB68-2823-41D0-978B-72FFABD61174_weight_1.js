const v1 = new Set();
class C2 {
    [Set] = v1;
    b;
    get e() {
        v1.e = this;
        new BigUint64Array(4096);
        new Uint8Array(0);
        new Int16Array(129);
        return v1;
    }
}
new C2();
const v14 = new C2();
const v15 = new C2();
new Array(16);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a22;
}
new F19(C2, v14);
const v24 = (a25) => {
    return a25;
};
new F19(v15, v14);
new F19(v14, C2);
function f30() {
    return f30;
}
class C31 extends f30 {
    constructor(a33, a34) {
        super();
        switch (a33) {
            default:
                function f35() {
                    return f35;
                }
                class C37 extends Array {
                }
                const v38 = new C37();
                function f39(a40, a41, a42, a43) {
                    return f39;
                }
                f39(Set, v38, -16, this);
                break;
        }
    }
}
new C31(-16, f30);
