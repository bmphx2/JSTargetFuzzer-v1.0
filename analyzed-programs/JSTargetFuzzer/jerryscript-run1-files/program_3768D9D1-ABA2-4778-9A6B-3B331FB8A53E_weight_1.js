new BigUint64Array(7);
new Int8Array(7);
new Uint8Array(5);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a15;
    this.g = a14;
}
new F12(0, -367487612, 0, 5);
const v19 = new F12(7, 536870887, 5, 536870887);
new F12(536870887, 7, 536870887, 536870887);
let v21 = -41990;
class C22 {
    o(a24, a25) {
        a24 instanceof a24;
    }
}
const v27 = new C22();
const v28 = [-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
try { v27.o(v28); } catch (e) {}
let v30 = --v21;
(--v30).toString;
try { v19(); } catch (e) {}
