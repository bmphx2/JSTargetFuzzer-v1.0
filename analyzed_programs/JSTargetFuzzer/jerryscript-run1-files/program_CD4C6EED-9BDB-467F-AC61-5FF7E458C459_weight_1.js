function f3(a4, a5) {
    const o18 = {
        o(a7, a8) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = this;
                this.d = a4;
            }
            new F9(a5, a7, a5, a4);
            new F9(a5, this, a4, a7);
            const v17 = new F9(a4, a4, a5, a4);
            return v17;
        },
        "b": a5,
        "d": 51355,
        "c": a4,
        [a4]: a5,
    };
    return o18;
}
f3(10000, 51355);
const v20 = f3(10000, 1711);
f3(1711, 1711);
const v22 = [v20,v20];
const v23 = [v20,1711];
[1711];
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a27;
    this.f = f3;
    this.b = 10000;
}
new F25(v22, 10000);
const v30 = new F25(v22, 1711);
new F25(v23, 10000);
const o36 = {
    get f() {
        while (3769 < 3) {
        }
        return v30;
    },
};
