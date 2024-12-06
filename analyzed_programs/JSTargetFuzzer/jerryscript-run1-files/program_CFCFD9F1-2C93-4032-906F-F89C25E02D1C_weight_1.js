function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 6;
    this.c = 6;
    this.h = 6;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static {
        this[8] = this;
        for (let v8 = 0; v8 < 32; v8++) {
            v4["p" + v8] = v8;
        }
    }
    static 1 = v5;
    [v4] = v4;
}
const v11 = new C6();
const v12 = new C6();
const v13 = new C6();
class C14 {
    2;
    a = F0;
    constructor(a16, a17) {
        new F0();
    }
    static g;
    static b = F0;
}
new C14(v12, v11);
const v23 = new C14(v12, v11);
new C14(v13, C6);
try { C14.concat(v23, v11, v3, v13, v4); } catch (e) {}
let v26 = 0;
while (v26 < 1) {
    let v31 = NaN;
    v31 ^ v23;
    const v33 = v31--;
    Math.floor(-9007199254740992);
    v23 - !v33;
    v26++;
}
