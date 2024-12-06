const v0 = [];
function f1() {
    const o4 = {
        valueOf() {
            function f3() {
                return this;
            }
            return this;
        },
        "c": f1,
        "b": v0,
        [f1]: v0,
        "a": v0,
        "h": v0,
        ...v0,
        "g": v0,
    };
    return o4;
}
const v5 = f1();
const v6 = f1();
const v7 = f1();
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    const v26 = ([])[Symbol.iterator];
    try { v26(); } catch (e) {}
    const v30 = F14 / 1073741824;
    F14 && F14;
    +F14;
    Math.acosh(F14);
    let v34 = -v30;
    +v30;
    v34++;
    this.f = 1e-15;
    this.e = -17153;
    this.g = a19;
}
const v37 = new F14(v7, F14, v6, 214.47344962404645);
new F14(v6, 1e-15, v7, 1e-15);
new F14(v5, v37, v7, 1e-15);
("1073741824").match("1073741824") <= 214.47344962404645;
