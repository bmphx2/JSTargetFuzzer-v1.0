let v1 = 128;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v1;
    this.h = 11;
    this.g = a5;
}
const v6 = new F3(-58107);
let v7 = new F3(11);
const v8 = new F3(-58107);
class C9 extends F3 {
    [v6] = 11;
    static b;
    constructor(a11, a12, a13, a14) {
        super(11);
        v8[536870889] ^= 11;
        v7 -= this;
        /\p{Script_Extensions=Greek}*/vygmsi;
        /\c_a\W+/ygm;
        /a+?/ugms;
    }
    static c = v6;
    #a = v1;
}
const v18 = new C9(F3, 11, -58107, 11);
new C9(-58107, -58107, v1, -58107);
new C9(C9, -58107, 11, 11);
class C21 extends C9 {
    static #m(a23, a24) {
        v7 /= v7;
        const v26 = Symbol.split;
        v18[v26] = v26;
        return this;
    }
    static set f(a28) {
        delete v6?.h;
    }
    #d;
    static #b = 11;
}
new C21();
const v31 = new C21();
new C21();
for (const v33 in v31) {
    let v34;
    try { v34 = v33(v6); } catch (e) {}
    v1 = v34;
    function f35() {
        return C9;
    }
}
