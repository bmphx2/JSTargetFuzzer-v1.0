const v0 = [];
function f1() {
    return f1;
}
function f2() {
    const o5 = {
        "b": f1,
        "e": f2,
        p() {
            for (const v4 in this) {
                break;
            }
            return f1;
        },
    };
    return o5;
}
const v8 = f2().p();
Object.defineProperty(v8, v8, { writable: true, value: 512 });
function f9() {
    return f9;
}
class C10 extends f9 {
}
const v11 = new C10();
EvalError(v11[5]);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v0;
}
new F15();
const v18 = new F15();
const v19 = new F15();
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
}
const v29 = new Date();
v29.setHours();
+-65537;
const v35 = new Map();
v35.keys();
typeof -7528 === -4294967295;
const v42 = [5.409837218751631e+306,5.0,0.631320185332836,-1.0,-697.5426783793084,-235222.86486059672,0.06240438650725588,-2.0,0.3995307120555006,2.2250738585072014e-308];
try { v42.filter(); } catch (e) {}
for (const v47 of v0) {
    const v48 = [v47,v47,v47,F15];
    const v49 = [-1077135716n,Date];
    [98907330,v49,v49,v48,3];
}
const v51 = new Date();
Date(v51 << F15);
try { v18.seal(); } catch (e) {}
const v55 = v19 == 98907330;
Promise.race();
-354821398 % (-65537 | -65537);
16 >= v55 ? 16 : v55;
v51["toISOString"]();
