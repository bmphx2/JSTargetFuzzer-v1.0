function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 129;
    this.b = 129;
    this.f = 129;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [2147483648,1073741825,-2016899999,-1768790175,-6,-934203776,2135395035];
[-53847,-13,129,10,-44581,7608,61164,-1404314369];
const v8 = [13,-16048,6,-20323,-8,10,268435440,2];
class C10 extends F0 {
    static n(a12, a13, a14, a15) {
        const v17 = Symbol.species;
        a13[v17] = v17;
        try { a12.reverse(); } catch (e) {}
        +a12;
        return v4;
    }
    constructor(a21, a22, a23, a24) {
        super();
        a22[a22] >>= a24;
        try { a22.getHours(v3, v8, F0, v6, this); } catch (e) {}
    }
    16 = v6;
}
const v27 = new C10(v4, v5, v3, v4);
const v28 = new C10(v5, v27, v27, C10);
new C10(C10, v28, v28, v3);
function F33() {
    if (!new.target) { throw 'must be called with new'; }
    function f35(a36) {
        try { new a36(); } catch (e) {}
        return a36;
    }
    f35(F33);
}
new F33();
