const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a4;
    this.e = a5;
}
const v6 = new F2(F2, WeakMap);
const v7 = new F2(v6, v1);
const v8 = new F2(v7, F2);
const v9 = [v8,v8,v1,v7,F2];
const v10 = [v9];
const v11 = [v10,v10,v9,F2,v9];
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v6;
    this.c = a15;
    let v17;
    try { v17 = a16(v7, v9, a14, v9, F2); } catch (e) {}
    let v18;
    try { v18 = v17(v17); } catch (e) {}
    [v18,a15];
    const v20 = [F12];
    [v20,v8,v17,a16,v20];
    this.f = a16;
}
const v22 = new F12(v7, v9, v7);
let v23 = 0;
const v28 = 255 ** 1.7628648315202816e+308;
Math.log1p(v28);
let v30 = +v28;
const v32 = +(!v6);
do {
    new F2(F2, ...v11, F2, WeakMap);
    v23++;
} while (v23 < 7)
new F12(v22, v9, v6);
new F12(F2, v9, v7);
[1350110887,-735952721,9007199254740991,-2,255];
[-4294967295,-42065,64,54789,10,-9,1,5,-4096,-4294967296];
[-44343,-16,536870887,14,1486286527,1396930114,-1265465232,-24362,35508];
const v44 = [-0.0,2.2250738585072014e-308,5.0,1.207728181434696e+308,-5.0];
("undefined")[v44];
v28 + v44;
let v48;
try { v48 = v6["toString"](v22, v32); } catch (e) {}
v30 %= delete v1[v48];
