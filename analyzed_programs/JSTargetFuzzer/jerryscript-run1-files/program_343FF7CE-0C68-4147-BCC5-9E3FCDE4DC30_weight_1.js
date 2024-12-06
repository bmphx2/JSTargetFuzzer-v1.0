class C3 {
    ["getInt16"];
    static [-5.0] = "getInt16";
    static get a() {
        const v5 = this[this];
        let v6;
        try { v6 = v5("getInt16", -5.0, -5.0, "p", v5); } catch (e) {}
        return v5 instanceof v6;
    }
    #c;
    static ["getInt16"];
    static ["p"] = "p";
    static 63 = -5.0;
    ["p"];
}
const v8 = new C3();
const v9 = new C3();
const v10 = new C3();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -5.0;
    this.h = v9;
    this.d = a13;
}
const v15 = new F11("p", v9);
const v16 = new F11("p", "getInt16");
const v17 = new F11(v10, C3);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a20;
    this.b = a21;
}
new F18(v17, v9);
new F18(v16, v9);
const v24 = new F18(v17, v10);
C3 = v16;
let v25;
try { v25 = v17.unregister(v9, C3, F11, v17); } catch (e) {}
v8.__proto__ = v8;
try { v10.valueOf(v24, "getInt16", v15, F18); } catch (e) {}
function F27(a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F11;
}
const v32 = new F27(v9, v17, v25);
new F27(v16, v24, v32);
new F27(C3, "getInt16", v24);
