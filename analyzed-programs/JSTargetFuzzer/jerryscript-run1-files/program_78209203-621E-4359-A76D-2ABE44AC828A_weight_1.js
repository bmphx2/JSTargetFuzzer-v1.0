function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 257;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
-Infinity;
const v9 = [v3,v4];
const v10 = [v5,-2.2250738585072014e-308,v9,-2.2250738585072014e-308];
const v11 = [F0];
function f12() {
    return v10;
}
for (let v14 = 0; v14 < 19; v14++) {
    v9[v14] &= v14;
    v4[381] = v14;
    f12();
}
class C21 {
    constructor(a23, a24) {
        function f25() {
            function F26(a28, a29, a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = v9;
                this.h = -2147483648n;
            }
            new F26(v10, v10, this, 41251n);
            new F26(v9, v11, F26, -1073741824n);
            new F26(v11, v9, F0, 41251n);
            a24.h = 536870888n;
            function f36() {
                return F0;
            }
            const v37 = [arguments,a24,9.014421168250114e+307];
            [[v37],v37,v4,41251n];
            return arguments;
        }
        const v40 = f25();
        function f41() {
            const o42 = {
                ...v40,
            };
            return o42;
        }
        f41();
        f41();
    }
}
function f45(a46) {
    return a46;
}
class C47 extends f45 {
    [-2147483648n];
    9 = 41251n;
    static e;
    static 1073741825 = 41251n;
    10;
    b = v4;
    [-2];
    static a;
}
new C21(C21, C21);
