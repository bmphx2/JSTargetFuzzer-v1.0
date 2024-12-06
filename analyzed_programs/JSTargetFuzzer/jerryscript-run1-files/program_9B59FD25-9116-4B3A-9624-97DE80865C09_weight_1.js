function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 13;
    this.d = 13;
    this.h = 13;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
function f9() {
    return v3;
}
v3[2338] = f9;
let {"c":v11,"d":v12,"h":v13,} = v4;
let v16 = v5--;
v16 ^ v16++;
try { v11["p"](v4, F0, v16, v4, v13); } catch (e) {}
new WeakMap();
function f28() {
    return f28;
}
const v29 = [-1000.0,-4.0,-4.4548035913475373e+307,-5.0,-2.220446049250313e-16,1.4432732586512561e+308,500.5699190879095,221.21309612643654,Infinity,-464.1330525019622];
const v32 = [f28];
Reflect.apply(v29.filter, RegExp, v32);
