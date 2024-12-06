function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 255;
    this.c = 255;
}
const v3 = new F0();
new F0();
new F0();
class C6 extends F0 {
    n(a8) {
        try {
            super.n();
        } catch(e10) {
        }
        try { v3(); } catch (e) {}
        return F0;
    }
    static 1;
    static 6;
    6 = v3;
    g;
    static #h;
}
new C6();
new C6();
new C6();
[-9223372036854775808,-1];
const v19 = [0,-1542713739];
[-31786,2,512,4,256,10,-2147483647,1073741824,-1,536870889];
const o24 = {
    valueOf() {
        try {
            super.m(this, v19, v3);
        } catch(e23) {
        }
        return 1.1167963418858757e+308;
    },
};
v3.length = 2;
