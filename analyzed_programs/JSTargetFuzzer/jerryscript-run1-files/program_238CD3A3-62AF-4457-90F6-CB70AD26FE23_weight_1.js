function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2147483647;
    this.g = -2147483647;
    const v3 = this[this];
    function f7() {
        return v3;
    }
    this.f = -2147483647;
}
new F0();
new F0();
new F0();
new Int8Array(1024);
new Float64Array(2238);
new BigUint64Array(192);
const v22 = new WeakSet();
v22["delete"](BigUint64Array);
const v27 = [6.587821035819711e+307,4294967297n];
ArrayBuffer.isView();
try { v27.toLocaleString(v27, v27); } catch (e) {}
