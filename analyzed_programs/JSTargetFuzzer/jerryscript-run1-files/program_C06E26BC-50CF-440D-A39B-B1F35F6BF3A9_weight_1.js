function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 8;
}
const v3 = new F0();
new F0();
new F0(F0, F0);
class C9 {
    g;
    static o(a11, a12) {
        const v13 = [a12,this,F0];
        const v15 = [[v13,v13,v13]];
        let {"e":v16,"f":v17,...v18} = v3;
        v15.length;
        return v13;
    }
    9 = 4294967297;
    a;
}
new C9();
new C9();
new C9();
const o27 = {
    get h() {
        return this;
    },
    toString(a26) {
        super.h = 13821;
        return 13821;
    },
};
o27["toString"]();
