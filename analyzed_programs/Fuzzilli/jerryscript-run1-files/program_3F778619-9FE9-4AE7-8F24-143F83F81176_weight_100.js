function f3() {
    return -4294967295;
}
const v8 = new WeakMap();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a12;
}
const v13 = new F9(-9007199254740990, 3);
const v14 = new F9(11, 3);
new F9(3, 11);
-1.586720057121946e+308 - -1.586720057121946e+308;
try { v14.compile(); } catch (e) {}
let v21 = 0;
while (v21 < 7) {
    const v24 = F9 === v8;
    var b = v24;
    let v25;
    try { v25 = v13.match(-9007199254740990, -9007199254740990, v24, F9); } catch (e) {}
    v8[v25] *= v25;
    v21++;
}
