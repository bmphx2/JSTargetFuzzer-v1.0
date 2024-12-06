function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -39582;
}
new F0();
new F0();
new F0();
function f9() {
    return 16;
}
function f13() {
    return "MAX_VALUE";
}
try {
    const t14 = "ql";
    t14[91] = F0;
    new WeakSet();
} catch(e16) {
}
