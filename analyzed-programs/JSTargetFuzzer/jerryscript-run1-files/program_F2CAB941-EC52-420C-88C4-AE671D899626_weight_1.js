const v2 = new BigInt64Array(10);
const v6 = Symbol.replace;
v2[v6] = v6;
new Int16Array(7, 10, 7);
!10;
new Int16Array(7);
const v12 = new Float64Array(8);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v2;
    this.h = a15;
    this.e = 7;
}
const v19 = new F13(7, 8, v2, 10);
const v20 = new F13(10, 7, 7, 10);
const v21 = new F13(7, 7, v12, 7);
class C22 {
    constructor(a24, a25) {
        const v27 = Symbol.iterator;
        const o40 = {
            [v27]() {
                let v29 = 10;
                const o39 = {
                    next() {
                        let v30 = this;
                        v29--;
                        const v33 = v29 == 0;
                        const o34 = {
                            "done": v33,
                            "value": v29,
                        };
                        let v35 = 0;
                        while (v35 < 7) {
                            Symbol[a25] = this;
                            [v30] = v2;
                            v35++;
                        }
                        return o34;
                    },
                    "a": C22,
                    "c": v29,
                    "f": a25,
                    ...v12,
                    __proto__: v21,
                };
                return o39;
            },
        };
    }
}
const v41 = new C22(v19, C22);
new C22(v20, v41);
const v44 = [2.220446049250313e-16,-5.0,-4.1481601478166175,-2.220446049250313e-16];
const v45 = [5.409837218751631e+306,5.0,0.631320185332836,-1.0,-697.5426783793084,-235222.86486059672,0.06240438650725588,-2.0,0.3995307120555006,2.2250738585072014e-308];
class C46 {
    n(a48, a49, a50, a51) {
        try { v45.filter(a50, v44); } catch (e) {}
        -256 <= this;
    }
    1 = v45;
}
const v54 = new C46();
const v55 = +v54;
v55 * v55;
new C22(C22, v21);
const v58 = [2.5870964546644305e+306];
for (let v59 = 0; v59 < 5; v59++) {
    v58["p" + v59] = v59;
}
v58["unshift"]();
