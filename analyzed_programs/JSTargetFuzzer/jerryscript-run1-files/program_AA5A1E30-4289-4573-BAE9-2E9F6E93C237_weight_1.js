const v2 = new Uint16Array(9);
const v5 = new Uint8Array(1122);
const v8 = v2.buffer;
const o9 = {
};
const v11 = new Proxy(v8, o9);
new Int16Array(6);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a15;
    this.g = Int16Array;
    this.f = 9;
}
const v17 = new F13(v2, Uint8Array);
v5.__proto__ = o9;
try { v11(o9, o9, 1122); } catch (e) {}
const v21 = +v8;
Math.ceil(v8);
Math.cbrt(6);
+v21;
Math.log(v11);
new F13(Uint16Array, Int16Array);
new F13(v17, v5);
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    function f30(a31) {
        try { new a31(); } catch (e) {}
        return a31;
    }
    f30(F28);
}
new F28();
