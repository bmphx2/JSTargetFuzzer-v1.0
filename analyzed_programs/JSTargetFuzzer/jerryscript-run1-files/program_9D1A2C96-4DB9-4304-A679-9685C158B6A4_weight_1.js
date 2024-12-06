function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -38951;
    this.split = -38951;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(F0);
class C9 extends F0 {
    set g(a11) {
        a11.unscopables = v4;
        let v12;
        try { v12 = a11(a11, F0, a11); } catch (e) {}
        v12.g = v12;
    }
    [F0];
    [v5];
    c;
    static [9007199254740990] = v5;
    [v3] = F0;
    static [-4294967296] = 43474;
}
new C9();
const v14 = new C9();
new C9(v14, v14, F0);
for (let v16 = 0; v16 < 5; v16++) {
    Object.keys(v16, v4);
}
