new Int8Array(512, 512);
new gc(5);
new RegExp(3162);
function f9() {
    return 512;
}
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 5;
    this.c = a17;
}
const v18 = new F13(-8, gc, 5);
new F13(22741, RegExp, v18);
new F13(-8, gc, 3162);
const v22 = new Set();
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    try { v22.forEach(a26, v22, F13); } catch (e) {}
}
new F23();
