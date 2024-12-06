function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 49079;
    this.a = 49079;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static [v5];
    constructor(a8) {
        super();
        v5[C6] = F0;
        for (let i11 = 0, i12 = 10; i11 < i12; i11++, i12--) {
            let v20;
            try { v20 = v5.valueOf(i12); } catch (e) {}
            v20 = this;
            v3[10] %= i12;
        }
    }
}
const v21 = new C6(v4);
const v22 = new C6(v21);
const v23 = new C6(v5);
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
    this.e = a30;
    this.h = v23;
}
new F27(1, 1, -1137495565, v4);
new F27(1, 1, 1, v21);
new F27(1, -1137495565, 1, v22);
let v37 = 0;
for (let i = 0; i < 5; i++) {
    v37 != 129n;
    v37++;
}
