function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 3;
}
const v3 = new F0();
const v5 = ("n").endsWith();
const v6 = new F0();
const v7 = new F0();
function f8() {
    return v3;
}
f8();
try { v7["toString"](v6, 7, "toString", v5); } catch (e) {}
f8();
new Uint32Array(7);
new Uint16Array(10);
new Float32Array(5);
SyntaxError().toString;
try { Float32Array(); } catch (e) {}
