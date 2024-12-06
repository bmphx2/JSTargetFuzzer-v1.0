const v0 = [8,268435440,1071275551,4,1797755424,823226050,56777,-13];
const v1 = [7,-14];
const v2 = [2147483648,1614958128,-26168,-2,536870889];
class C3 {
    static {
        function f5() {
            return v1;
        }
        this.d;
    }
    #g;
    static 7;
    static #c = v1;
    static #a = v2;
    static 0;
}
const v7 = new C3();
const v8 = new C3();
const v9 = new C3();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a14;
    this.g = C3;
    this.e = v1;
}
const v15 = new F10(v2, v8, v7);
let v16 = new F10(v9, v15, C3);
new F10(v2, v8, C3);
let v18 = 10;
for (; v18--;) {
    v2.valueOf = v18;
    let v20;
    try { v20 = new C3(F10, ...v1, ...v0, ...F10, F10); } catch (e) {}
    v20 = F10;
    +(v16 * v8);
    v16--;
    v16 + v16;
    ++v16;
}
