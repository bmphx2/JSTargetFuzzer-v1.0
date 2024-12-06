function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 268435440;
    this.f = 256;
}
const v7 = new F3(268435440, 268435440);
const v8 = new F3(65535, 65535);
const v9 = new F3(65535, 65535);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v8;
    this.g = a16;
    this.b = -256;
}
const v17 = new F13(65535, v7);
new F13(v17, v8);
new F13(v7, v9);
try { new Symbol(); } catch (e) {}
