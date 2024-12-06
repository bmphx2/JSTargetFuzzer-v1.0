function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9007199254740990;
    this.g = 9007199254740990;
}
new F0();
const v4 = new F0();
const v5 = new F0();
class C12 {
    static n(a14, a15) {
        const v16 = [6,v4];
        [v5,v16,512,a15,v5];
        const v18 = [a15,v16];
        const v19 = [a14,v5];
        [v19,[v18,-65535,65535,F0]];
        return F0;
    }
    static 8 = v4;
    127;
    static g;
    static [268435441];
}
new C12();
new C12();
new C12();
const o25 = {
};
const o26 = {
    ...o25,
};
function F27() {
    if (!new.target) { throw 'must be called with new'; }
}
class C29 extends F27 {
    constructor(a31, a32, a33) {
        super();
        this.__proto__ = F27;
        [14769,14769,14769,14769,14769];
        function f36() {
            return f36;
        }
        const v38 = [f36,a32];
        const v40 = [f36,8];
        Reflect.apply(v38.reduceRight, v38, v40);
    }
}
new C29(F27, F27, C29);
const v47 = [[268435441n]];
try { v47.lastIndexOf(-1.7976931348623157e+308, 268435441n); } catch (e) {}
