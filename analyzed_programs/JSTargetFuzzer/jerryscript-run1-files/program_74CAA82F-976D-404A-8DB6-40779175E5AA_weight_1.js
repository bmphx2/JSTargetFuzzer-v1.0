function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 2058286755;
    this.c = 2058286755;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f9() {
    return F0;
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
}
new F10(v3, -4, -63629, f9);
new F10(v3, -63629, -4, -63629);
function f18(a19) {
    return a19;
}
class C20 extends f18 {
    [v4];
}
new F10(v4, -63629, -63629, F0);
class C22 {
}
const v23 = new C22();
const v25 = v23[-583.1760893759623];
try {
    v25(v23);
} catch(e27) {
    class C28 {
        constructor(a30) {
            const v32 = new Uint32Array(this, v25);
            e27 <= v32;
            try { new C28(-583.1760893759623, -583.1760893759623, Uint32Array); } catch (e) {}
        }
    }
    new C28();
} finally {
}
