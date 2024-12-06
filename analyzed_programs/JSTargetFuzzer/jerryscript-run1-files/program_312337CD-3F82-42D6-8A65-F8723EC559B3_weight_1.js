function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 10n;
    this.a = a5;
}
new F3(10n, 10n);
new F3(F3, -4294967296n);
const v9 = new F3(-4294967296n, 10n);
new Int32Array(1024);
new Int8Array(360);
new Uint8Array(256);
class C20 extends v9.constructor {
    g = F3;
    16;
    static [-4294967296n] = 10n;
}
new C20();
