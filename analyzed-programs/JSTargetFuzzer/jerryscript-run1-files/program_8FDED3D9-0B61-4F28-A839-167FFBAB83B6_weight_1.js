function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 61100;
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a5;
    }
    const v6 = new F3(this);
    const v7 = new F3(F0);
    try { v6.valueOf(v7, 9223372036854775807, -12); } catch (e) {}
    v6.b = -4096;
    new F3(F0);
    this.g = 61100;
}
new F0();
new F0();
const v15 = new F0();
function f16() {
    return v15;
}
const v26 = [];
v26.toLocaleString(v26, v26);
