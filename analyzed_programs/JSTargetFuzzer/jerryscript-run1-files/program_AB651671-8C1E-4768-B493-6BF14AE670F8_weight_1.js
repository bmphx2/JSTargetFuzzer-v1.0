function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1000;
    this.h = 1000;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.h = a8;
}
const v10 = new F6(v4, v4);
const v11 = new F6(v5, v5);
new F6(v4, v5);
const v19 = new F6(-7, -7);
new F6(-44626, v11);
try { v4(F6, FinalizationRegistry, v10, v19, "12"); } catch (e) {}
try { ("function").repeat(-128); } catch (e) {}
