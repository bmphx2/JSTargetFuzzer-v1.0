function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
    this.c = a5;
    this.b = 0;
}
const v7 = new F3(1658114687, 1658114687);
new F3(44654, 44654);
const v9 = new F3(1658114687, 44654);
function f10() {
    return v7;
}
class C11 extends f10 {
    static b = 44654;
    static #d = 0;
    constructor(a13, a14, a15) {
        super();
    }
    static #c;
    toString(a20, a21, a22, a23) {
        a21[F3] = a20;
        return a21;
    }
    static 3;
    static g = 44654;
}
const v24 = new C11(F3, 1658114687, 0);
new C11(44654, v24, 44654);
const v26 = new C11(C11, C11, 44654);
const v27 = /1(?:ab){4,7}/vs;
/[a{0,1}?]/us;
/2E(a\1)kJIb/vygmid;
for (let v30 = 0; v30 < 32; v30++) {
    v7["p" + v30] = v30;
}
function f33(a34, a35, a36) {
    const o37 = {
        "a": 44654,
    };
    return o37;
}
f33(1658114687, f33(1658114687, f33, v26), v24);
f33(1658114687, v27, v9);
