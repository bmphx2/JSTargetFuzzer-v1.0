function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = -2;
    t2.c = 62165383;
    const t4 = 10000;
    t4.e = 62165383;
    this.h = a11;
}
new F6(10000, 10000, -2924, -2);
new F6(-9007199254740990, -9007199254740990, -2924, -2);
new F6(-2, -9007199254740990, 62165383, 10000);
function f18(a19, a20) {
    a20(this);
    return a20;
}
new Promise(f18);
