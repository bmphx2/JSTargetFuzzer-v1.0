function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.h = f0;
    this.a = f0;
}
new F1();
const v4 = new F1();
new F1(F1, f0);
new Map();
try { v4.o(-1204229184, "preventExtensions", null); } catch (e) {}
const t13 = "preventExtensions";
t13["preventExtensions"] = Map;
function f19(a20, a21) {
    a20(65537, 9007199254740990, a21);
    return a21;
}
const v25 = new Uint8Array(8, "preventExtensions", Uint8Array, v4);
try { v25.reduce(f19); } catch (e) {}
