function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.h = -1000000000.0;
    this.d = 3.0;
    a5.e = -1000000000.0;
}
new F3(-1000000000.0, F3);
const v8 = new F3(3.0, F3);
new F3(-1000000000.0, F3);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
}
new F19();
([v8]).reverse();
