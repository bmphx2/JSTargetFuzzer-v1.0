const v1 = new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.arguments = a4;
    this.h = a4;
}
let v5 = new F2(v1, F2);
const v6 = new F2(v5);
const v7 = new F2(F2, WeakMap, v6);
const v8 = [127,2147483647,-3,1073741825,-1,-65536,57369,256,-6];
const v9 = [-11,1,-8404,9223372036854775807,2116289997];
let [v10] = v8;
v5.h = v1;
new WeakSet();
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a15;
    this.b = a16;
    this.f = a16;
}
new F13(v6, v6, v10);
new F13(v5, F13, v6);
new F13(v10, WeakMap, v7);
v5 &= v7;
let v21;
try { v21 = v1.get(v6, v1, v7); } catch (e) {}
try { v7.getUint8(v21, v10, v21); } catch (e) {}
const v23 = [4294967297,10,65536,1404919287,598290188,8636,-1735520819,3,-752542128];
F13[0] = v9;
const v25 = WeakSet;
try { v10(v23); } catch (e) {}
class C33 {
    toString(a35, a36, a37, a38) {
        +a36;
    }
}
