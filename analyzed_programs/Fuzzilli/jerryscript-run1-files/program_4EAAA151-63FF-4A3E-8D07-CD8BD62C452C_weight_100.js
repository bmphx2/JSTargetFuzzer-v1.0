function f0() {
    const o4 = {
        "f": 9007199254740992,
        "d": 9007199254740992,
        "b": 9007199254740992,
        "h": -9.658295530949682e+307,
        256: 7561,
        [9007199254740992]: 7561,
        "c": 9007199254740992,
        ...9007199254740992,
        "e": 9007199254740992,
        ...7561,
        "a": -9.658295530949682e+307,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
const v9 = new Date();
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
}
const v14 = new F10(F10, v6);
new F10(F10, v7);
new F10(f0, v6);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v5;
    this.g = Date;
}
new F17(v6, v5);
new F17(v6, v14);
new F17(v14, v9);
class C24 extends F17 {
    e;
}
const v25 = new C24();
new C24();
new C24();
let v30 = 3;
[v30,f0,...v30] = v25;
