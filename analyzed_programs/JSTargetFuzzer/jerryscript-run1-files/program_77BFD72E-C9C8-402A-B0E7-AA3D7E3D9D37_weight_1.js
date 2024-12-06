function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9223372036854775807;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a8;
    this.g = v5;
}
new F6(v5, v3);
const v11 = new F6(v3, v5);
new F6(v3, v4);
[-444860.71237448056,-223.52214456868057,9.236927892796132,1.368341554908845e+308,-6.045563156769694,0.3517589771574372,1000000000000.0,4.3283396926643505,-0.0];
const v14 = [1e-15,0.6964741779514201];
[0.7343883665918796,4.0,2.220446049250313e-16,-5.0,0.5875523572790738,3.0,2.2250738585072014e-308,-2.2250738585072014e-308];
v14[v11] = v4;
try { v5["p"](v11, F0, F6); } catch (e) {}
for (let v19 = 0; v19 < 32; v19++) {
    v4["p" + v19] = v19;
}
for (let v26 = 0; v26 < 32; v26++) {
    v11["p" + v26] = v26;
}
const v30 = [[268435441n]];
try { v30.lastIndexOf(-1.7976931348623157e+308, 268435441n); } catch (e) {}
