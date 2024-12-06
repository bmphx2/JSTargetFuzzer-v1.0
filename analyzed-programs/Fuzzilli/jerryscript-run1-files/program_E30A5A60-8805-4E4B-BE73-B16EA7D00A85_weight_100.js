function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
}
const v7 = new F3("NEGATIVE_INFINITY", "NEGATIVE_INFINITY");
new F3("n", "n");
const v9 = new F3("NEGATIVE_INFINITY", "NEGATIVE_INFINITY");
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v7;
    this.e = "NEGATIVE_INFINITY";
}
const v14 = new F10("NEGATIVE_INFINITY", "n");
const v15 = new F10("NEGATIVE_INFINITY", F10);
let v16 = new F10("NEGATIVE_INFINITY", "d");
class C17 extends F3 {
    a = v9;
    static n(a19, a20, a21, a22) {
        try {
            super.values(v14, a19, a20);
        } catch(e24) {
        }
        a19[v15];
        return v7;
    }
    static h = v9;
    #c;
    8 = v14;
}
new C17();
new C17();
new C17();
("NEGATIVE_INFINITY").length;
Math.acosh(-29601);
Math.exp(v16);
-(-636455978);
v16--;
Math.trunc(-636455978);
Math.tanh(-29601);
