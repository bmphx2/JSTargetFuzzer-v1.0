const v6 = [1.7976931348623157e+308,1.7976931348623157e+308];
let v7 = [1073741825n,696184.3910677719];
const v8 = [v6,1.0,1.7976931348623157e+308,v7];
const v10 = new WeakSet();
class C11 extends WeakSet {
    constructor(a13, a14, a15, a16) {
        super(a14);
        v7 += v7;
        a13[a16];
        for (let v18 = 0; v18 < 32; v18++) {
            v10["p" + v18] = v18;
        }
    }
    static [v6];
    static #g;
    static #f = WeakSet;
}
new C11(v7, v8, 1.7976931348623157e+308, v6);
const v22 = new C11(v8, v7, 696184.3910677719, 696184.3910677719);
const v23 = new C11(v7, v6, 696184.3910677719, v22);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a26;
}
const v28 = new F24(v22, -224140890n);
new F24(v28, -7n);
const v30 = new F24(v22, -7n);
let v31;
try { v31 = v22(v6, v30, v23, 696184.3910677719, WeakSet); } catch (e) {}
try { v6.find(v31); } catch (e) {}
new Set();
