function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
    this.a = f0;
    const v3 = this !== f0;
    const v4 = v3 ? this : f0;
    this[7] = this;
    v4[8] /= f0;
    v4[v3];
}
const v6 = new F1();
const v7 = new F1();
const v8 = new F1();
const v9 = [0.05797055501753212,2.2250738585072014e-308,3.601164534697517e+305];
const v10 = [603792.4502361258,0.5174541887934883,-5.0,127150.65625476697,1000000.0];
const v11 = [2.2250738585072014e-308,1000000.0,1.673191283875223];
function f12(a13, a14, a15) {
    const o16 = {
        244332683: f0,
        "g": a14,
    };
    return o16;
}
f12(v8, v6, v6);
f12(v7, v7, v6);
f12(v8, v6, v6);
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a22;
    this.NaN = a24;
    this.c = a22;
}
new F20(v10, v9, v9);
new F20(v11, v10, v11);
new F20(v11, v9, v10);
let v31 = 1000000.0;
Math.round(++v31);
