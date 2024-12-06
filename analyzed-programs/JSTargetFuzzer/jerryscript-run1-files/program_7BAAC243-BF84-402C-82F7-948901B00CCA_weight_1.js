function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -64011;
    this.h = -64011;
}
new F0();
const v4 = new F0();
new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.d = a8;
}
new F6(v4);
new F6(v4);
new F6(v4);
new Uint16Array(3765);
new Uint8Array(2167);
new Uint8Array(256);
-112059956n + -4294967297n;
