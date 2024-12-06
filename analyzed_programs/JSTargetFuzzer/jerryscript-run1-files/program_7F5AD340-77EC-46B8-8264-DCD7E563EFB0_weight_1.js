function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1073741825;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a9;
    this.f = v3;
    this.e = v3;
}
const v10 = new F7(v4);
new F7(v10);
new F7(v4);
const o26 = {
    m(a19, a20, a21, a22) {
        let v23 = -1582169311;
        "c" - v23--;
        return v5;
    },
};
