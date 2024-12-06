function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 7621;
    this.d = 7621;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    get a() {
        return v4;
    }
    constructor(a12, a13) {
        let v14;
        try { v14 = a13.o(a13); } catch (e) {}
        const v15 = [a13,v5,a12,v5,v14];
        [v15];
        [v5,v15,a12];
    }
    /*
    constructor(a19, a20) {
        let v18 = this;
        const v21 = a19 >>> v18;
        new F0();
        v21 == F0;
        super.h /= v18 = a19;
    }
    */
}
const v24 = new C6(v3, v3);
const v25 = new C6(v4, v4);
const v26 = new C6(v5, v3);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a30;
    this.e = a29;
    this.b = v5;
}
new F27(v26, v24);
new F27(v25, v26);
new F27(v26, C6);
(-12n).toString();
