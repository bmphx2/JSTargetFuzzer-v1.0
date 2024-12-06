new BigUint64Array(4);
const v5 = new Int16Array(1024);
const v8 = new Uint32Array(7);
class C9 {
    set h(a11) {
        let v12 = this in a11;
        delete this[v12];
        ({"f":v12,} = this);
        try { this.p(1024, 7, a11); } catch (e) {}
        for (let v15 = 0; v15 < 32; v15++) {
            this["p" + v15] = v15;
        }
    }
    [4];
    1 = v5;
    4;
    static [v8];
}
const v18 = new C9();
new C9();
const v20 = new C9();
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a23;
    this.d = a23;
    this.c = a23;
}
new F21(v20, 4);
const v26 = new F21(v18, 7);
let v27 = new F21(v18, 1024);
v20 + C9;
function f30(a31, a32, a33, a34) {
    return -30468n;
}
f30(v27, v26, C9, C9);
Math.fround(v26);
--v27;
1024 >>> v27;
Math.max(v26);
