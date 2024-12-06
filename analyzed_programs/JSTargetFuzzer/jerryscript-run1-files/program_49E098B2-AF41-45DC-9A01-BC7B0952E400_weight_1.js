function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0.d = 50329;
    this.f = 50329;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
let v7;
try { v7 = v3["getMilliseconds"](v3, v4); } catch (e) {}
const v8 = "getMilliseconds" || v7;
v5 *= v3;
const v9 = typeof v8;
v9 === "symbol";
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a16;
    this.a = v3;
    this.b = a15;
}
const v17 = new F13(v3, v5);
new F13(v4, v4);
new F13(v3, v17);
const o28 = {
    valueOf() {
        (this % "getMilliseconds") % this;
        Math.expm1("symbol");
        return v9;
    },
};
async function f31(a32, a33) {
    return 2131433545 instanceof 2131433545;
}
f31();
