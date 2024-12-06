let v1 = new Map();
class C2 extends Map {
    [Map] = v1;
    static get h() {
        const v4 = v1 === this;
        v1.__proto__ = C2;
        C2.toString = C2;
        [v4,[Map,v4,v1,this],C2];
        [Map,Map,C2];
        if (v4) {
            let v8 = v4 >> v4;
            ({"f":v1,"size":v8,...v8} = v1);
        } else {
            function f9() {
                return this;
            }
        }
        return v4;
    }
}
new C2();
new C2();
new C2();
let v17;
try { v17 = C2.asIntN(C2, -1.7976931348623157e+308, 1.0, -1.7976931348623157e+308); } catch (e) {}
try { v17(); } catch (e) {}
class C24 {
}
async function f25(a26, a27) {
    f25(a26);
    a26 <<= C24;
    return C24;
}
C2.h;
let v34 = -43172;
(1 || 9) - v34--;
f25(C24);
