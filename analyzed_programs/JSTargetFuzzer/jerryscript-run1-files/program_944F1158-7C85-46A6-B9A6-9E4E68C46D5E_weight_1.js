function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 257;
    this.g = a6;
}
const v7 = new F3(268435440, 268435440);
const v8 = new F3(-1131607623, v7);
const v9 = new F3(257, -1131607623);
Array.of();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a15;
}
new F13(v9, v8, v9, v8);
new F13(v7, v9, -1131607623, v7);
new F13(v7, v8, F13, v7);
try { DataView(); } catch (e) {}
