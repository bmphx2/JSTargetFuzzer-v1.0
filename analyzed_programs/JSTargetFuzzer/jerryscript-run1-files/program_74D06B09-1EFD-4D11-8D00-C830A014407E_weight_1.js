const v0 = [134519.47537293285,0.10274893274398034,1000000000000.0,0.6497603448840058];
const v1 = [-3.0,0.19354087260203645,-5.604559168775072e+307];
const v2 = [1000.0,Infinity,2.2250738585072014e-308,3.735112508055992e+307];
let v4 = -4;
class C6 {
    constructor(a8, a9, a10, a11) {
        for (let i13 = 0; i13 < 10; i13++) {
            for (let v19 = 0; v19 < 32; v19++) {
                a9["p" + v19] = i13;
            }
            const v22 = i13 >= a11;
            v22 ? i13 : a11;
            v4 **= i13;
            try {
                super.cosh(a11, v22, a8, v22);
            } catch(e25) {
            }
        }
    }
    10;
    [v2] = v0;
    11;
    536870887 = 255;
    static 1073741824 = v0;
}
const v26 = new C6(v1, v1, v0, -4294967295);
const v27 = new C6(v2, v2, v2, v4);
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a32;
    this.b = v4;
}
new F28(v2, v1, v1, v1);
new F28(v2, v1, v1, v2);
new F28(v1, v1, v26, v26);
new C6(v2, v2, v26, C6);
new WeakMap();
function f40() {
    return C6;
}
function f45(a46, a47, a48, a49) {
    const o52 = {
        set g(a51) {
        },
        ...a46,
    };
    return v27;
}
const v53 = f45();
f45(2, v53);
v53.g **= 2;
