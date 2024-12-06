class C3 {
    static e;
    constructor(a5, a6) {
        a5?.f;
        try {
            super.toString(a6, this, a6);
        } catch(e9) {
        }
    }
    f = 1146708515;
    d = 1146708515;
}
const v10 = new C3(6.941036676261952, 6.941036676261952);
const v11 = new C3(0.0, 1146708515);
const v12 = new C3(v11, v11);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a16;
    this.f = C3;
    this.e = 0.0;
}
const v19 = new F13(v10, v12, v11, v10);
const v20 = new F13(v11, v12, v19, v19);
new F13(v11, v19, v20, v12);
let v22 = 0;
while (v22 < 6) {
    C3[2];
    v22++;
}
try { v20.o(v22, v20); } catch (e) {}
try { C3["setTime"](1146708515, 0.0, 6.941036676261952, "setTime"); } catch (e) {}
