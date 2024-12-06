function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1187019422;
    this.c = 1187019422;
}
const v3 = new F0(F0, F0, F0);
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = this;
}
const v10 = new F6(v4, v5);
const v11 = new F6(v5, v3);
const v12 = new F6(v4, v11);
[v11];
[v4,v3,v11,v10];
[v12,v5];
new Array(4096);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    F19.c = 1433387171;
}
new F19();
new F19();
