const v4 = [2.0,136763.08874924784,893969.132145982,1.0,-5.0,-778551.4725946978,-1.0];
const v5 = [-1.7976931348623157e+308,2.220446049250313e-16];
const v6 = [-611.7742331191232];
function f7(a8, a9) {
    const o16 = {
        "e": "2147483649",
        "d": a8,
        [a8]: undefined,
        65535: "-2147483648",
        "h": a8,
        "c": "2147483649",
        set a(a11) {
            a11.c = this;
            function f12() {
                return this;
            }
        },
    };
    return o16;
}
f7("-2147483648", v5);
f7("mCVs", v5);
f7("2147483649", v6);
let v21 = -9007199254740990n;
v21 %= 127n;
class C25 extends f7 {
    static set h(a27) {
        function f28(a29, a30, a31) {
            a31.length = a27;
            a30.valueOf = f7;
            function F32(a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a35;
                this.f = f7;
                this.h = this;
            }
            new F32(9.077210608044037, this);
            new F32(-1.0, a31);
            new f28(-2.2250738585072014e-308, "2147483649");
            return a29;
        }
        f28(-1.0, v4, "-2147483648");
    }
}
new C25();
new C25();
new C25();
("p").lastIndexOf();
