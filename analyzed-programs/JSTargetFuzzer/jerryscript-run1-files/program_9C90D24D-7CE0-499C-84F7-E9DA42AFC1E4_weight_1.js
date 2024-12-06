function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v6 = [F1];
const v7 = [v6,v3,F1,f0,v4];
const v8 = [f0,v7,v5];
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    class C14 {
        f;
        0 = F1;
    }
    new C14();
    new C14();
    new C14();
    this.c = v8;
    this.h = a13;
}
const v18 = new F9(v6, v7, v5);
new F9(v8, v8, v3);
v18[9] = v7;
v8.length >>>= v4[v18];
new F9(v6, v8, v3);
function F25(a27) {
    if (!new.target) { throw 'must be called with new'; }
}
const v28 = new F25(F25);
const v30 = v28[268435456];
switch (8) {
    case v30:
        function F31(a33, a34) {
            if (!new.target) { throw 'must be called with new'; }
            a34(F31);
        }
        break;
}
