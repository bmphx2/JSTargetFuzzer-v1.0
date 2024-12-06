const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v0;
    this.g = v0;
    this.h = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v5;
    this.b = v5;
    this.g = a8;
}
const v9 = new F6(v3);
const v10 = new F6(v5);
const v11 = new F6(v4);
class C12 extends F1 {
    constructor(a14, a15, a16, a17) {
        super();
        super.h;
    }
    f;
    o(a20, a21) {
        a21 = v9;
        return "iterator";
    }
}
const v25 = new C12(v4, v11, v11, v5);
new C12(v25, v9, v11, v9);
const v27 = new C12(v3, v10, v9, F1);
new F6(v4);
typeof v11 === "object";
v9[1];
let v33 = 0;
do {
    v5 != v0;
    v27[1568] *= delete v27?.h;
    v9.g;
    v33++;
} while (v33 < 7)
