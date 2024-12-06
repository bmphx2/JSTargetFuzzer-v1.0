function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65535;
    this.d = -65535;
    this.h = -65535;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const o6 = {
};
const v8 = new Proxy(v4, o6);
try { v8.o(v3, v3, v8, v5, F0); } catch (e) {}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a12;
}
new F10(v5);
new F10(v3);
new F10(v3);
new Date(Date, Math);
