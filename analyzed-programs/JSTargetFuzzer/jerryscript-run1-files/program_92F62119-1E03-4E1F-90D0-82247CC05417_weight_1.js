function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740991;
    this.e = -9007199254740991;
}
new F0();
new F0();
const v5 = new F0();
class C9 extends F0 {
    constructor(a11, a12) {
        let v13 = 0;
        while (v13 < 3) {
            for (let v17 = 0; v17 < 32; v17++) {
                C9["p" + v17] = v17;
            }
            v13++;
        }
        super();
        let v21 = a11 <= a11;
        v21 ? a11 : 512;
        --v21;
    }
    static n(a25, a26, a27, a28) {
        [a26,a27,a26,a26];
        [[F0,a25,512,a27]];
        return -55358;
    }
}
new C9(512, 512);
const v33 = new C9(v5, 512);
new C9(v33, -55358);
const v37 = new Int8Array();
const v38 = v37.values();
const v41 = new BigInt64Array(2);
v41.lastIndexOf(v38, -10);
