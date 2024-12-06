function f0() {
    const o16 = {
        set g(a5) {
            a5 = "26hs";
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a12;
            }
            const v13 = new F9(-7, -7);
            new F9(1203148013, v13);
            new F9(-9411, 319.8811563672268);
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
const v22 = new Map();
class C23 extends Map {
    static 0;
    static #a;
    constructor(a25, a26) {
        super(v18);
        a26[true] = Map;
        function f27(a28, a29, a30) {
            let v31;
            try { v31 = new a30(a30, a29, a28, a28); } catch (e) {}
            return v31;
        }
        f27(a26, a25, a26);
    }
    [v22];
}
const v33 = new C23(v17, Map);
new C23(v18, Map);
new C23(v19, true);
const v38 = new Int32Array(46);
const v41 = new Uint8ClampedArray(996);
const v44 = new Int16Array(102);
v44.__proto__ = v33;
const v46 = [v33,v17,46,46];
[v46,46,v41,v19,v46];
[Map,f0,46];
function F49(a51, a52, a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v38;
}
new F49(v19, v19, v17, v17);
new F49(v18, v17, v19, v18);
new F49(C23, v18, v19, v19);
