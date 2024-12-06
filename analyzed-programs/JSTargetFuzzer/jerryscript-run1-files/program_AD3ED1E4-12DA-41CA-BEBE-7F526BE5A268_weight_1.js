function f0() {
    let v2 = "-17076474";
    const o14 = {
        "h": 268435456,
        [v2](a5, a6) {
            v2 &= "symbol";
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a10;
            }
            const v11 = new F7(v2, 268435456);
            new F7(a6, this);
            new F7(v11, "symbol");
            return v2;
        },
        11: 268435456,
    };
    return o14;
}
const v15 = f0();
f0();
const v17 = f0();
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a20;
}
new F18(v17);
new F18(F18, v17, v15);
new F18(v15);
function f30(a31, a32) {
    const o36 = {
        p(a34) {
            let v33 = this;
            ~(v33 = a31);
            return f30;
        },
    };
    return o36;
}
class C37 {
}
C37 **= C37;
