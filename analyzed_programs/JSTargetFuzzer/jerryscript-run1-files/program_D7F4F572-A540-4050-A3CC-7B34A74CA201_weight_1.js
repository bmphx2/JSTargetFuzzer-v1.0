function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4294967295;
    this.d = 4294967295;
}
let v3 = new F0();
new F0();
const v5 = new F0();
function f6() {
    return v5;
}
class C7 {
    static n(a9, a10) {
        let v8 = this;
        [a9,v8,a10] = v8;
        try { new a9(a9, v8, v5, v8); } catch (e) {}
        v5[a10];
        v3 /= v5;
        for (let v13 = 0; v13 < 32; v13++) {
            v5["p" + v13] = v13;
        }
        return F0;
    }
}
new C7();
new C7();
new C7();
let v23 = 0n;
v23 += 15n;
function f24(a25, a26) {
    return -2.2250738585072014e-308;
}
f24(v5, -2.2250738585072014e-308, -57.723613594753374);
