class C3 {
    static get f() {
        new BigInt64Array(64);
        new Int32Array(4096);
        new BigInt64Array(1573);
        return -746629190;
    }
}
const v14 = new C3();
const v15 = new C3();
const v16 = new C3();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a20;
    this.e = a20;
    this.d = a19;
    const o21 = {
    };
    function f22(a23, a24, a25, a26) {
        const o29 = {
            set g(a28) {
            },
            ...a24,
        };
        return o29;
    }
}
new F17(-746629190, v16);
new F17(-746629190, v14);
new F17(922208438, v15);
RangeError();
